"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import HorarioCalendar, { type Event } from "@/components/HorarioCalendar";
import { COR_PADRAO, CORES_HORARIO, DIAS_SEMANA, HORA_RE, horaParaMinutos } from "@/lib/horarios";
import Alert from "../../_components/Alert";
import SubmitButton from "../../_components/SubmitButton";
import type { FormState } from "../../_lib/form";

export type AulaDraft = {
  /** DB id for saved aulas, negative temporary id for the ones added in this session. */
  id: number;
  dia_semana: number;
  inicio: string;
  fim: string;
  titulo: string;
  sala: string;
  cor: string;
};

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

/** Same rules as the server action; the server re-validates everything on Aplicar. */
function problema(a: AulaDraft): string | null {
  if (!a.titulo.trim()) return "Falta o título.";
  if (!HORA_RE.test(a.inicio) || !HORA_RE.test(a.fim)) return "Falta a hora de início ou de fim.";
  if (horaParaMinutos(a.inicio) >= horaParaMinutos(a.fim)) return "O fim tem de ser depois do início.";
  return null;
}

const serialize = (aulas: AulaDraft[]) =>
  JSON.stringify(aulas.map(({ dia_semana, inicio, fim, titulo, sala, cor }) => ({ dia_semana, inicio, fim, titulo, sala, cor })));

export default function HorarioEditor({
  action,
  initial,
}: {
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  initial: AulaDraft[];
}) {
  const [state, formAction] = useActionState<FormState, FormData>(action, {});
  const [aulas, setAulas] = useState<AulaDraft[]>(initial);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nextTempId, setNextTempId] = useState(-1);

  const baseline = useMemo(() => serialize(initial), [initial]);
  const payload = serialize(aulas);
  const dirty = payload !== baseline;
  const invalidas = aulas.filter((a) => problema(a) !== null);
  const selected = aulas.find((a) => a.id === selectedId) ?? null;

  // Leaving with unapplied changes would silently lose them.
  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty]);

  const events: Event[] = aulas
    .filter((a) => problema(a) === null)
    .map((a) => ({
      id: a.id,
      day: DIAS_SEMANA[a.dia_semana],
      start: a.inicio,
      end: a.fim,
      title: a.titulo,
      room: a.sala,
      color: a.cor,
    }));

  const update = (id: number, patch: Partial<AulaDraft>) =>
    setAulas((list) => list.map((a) => (a.id === id ? { ...a, ...patch } : a)));

  const add = () => {
    const base = selected;
    const nova: AulaDraft = {
      id: nextTempId,
      dia_semana: base?.dia_semana ?? 0,
      inicio: base?.fim ?? "17:00",
      fim: "",
      titulo: "",
      sala: base?.sala ?? "",
      cor: base?.cor ?? COR_PADRAO,
    };
    setNextTempId((n) => n - 1);
    setAulas((list) => [...list, nova]);
    setSelectedId(nova.id);
  };

  const remove = (id: number) => {
    setAulas((list) => list.filter((a) => a.id !== id));
    setSelectedId(null);
  };

  const discard = () => {
    if (!confirm("Descartar todas as alterações por aplicar?")) return;
    setAulas(initial);
    setSelectedId(null);
  };

  const sorted = [...aulas].sort(
    (a, b) => a.dia_semana - b.dia_semana || a.inicio.localeCompare(b.inicio) || b.id - a.id,
  );

  return (
    <form
      action={formAction}
      // Enter inside a field must not publish the schedule: only the Aplicar button does.
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target instanceof HTMLInputElement) e.preventDefault();
      }}
      className="space-y-6"
    >
      <input type="hidden" name="aulas" value={payload} />

      <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white px-5 py-3 shadow-lg">
        <p className="text-sm">
          {dirty ? (
            <span className="font-semibold text-yellow-700">● Alterações por aplicar (só visíveis aqui)</span>
          ) : (
            <span className="text-gray-600">Sem alterações. O que vê abaixo é o horário publicado.</span>
          )}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={discard}
            disabled={!dirty}
            className="rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            Descartar
          </button>
          <SubmitButton pendingText="A aplicar…" disabled={!dirty || invalidas.length > 0}>
            Aplicar
          </SubmitButton>
        </div>
      </div>

      {state.error && <Alert kind="error">{state.error}</Alert>}
      {invalidas.length > 0 && (
        <Alert kind="error">
          {invalidas.length === 1 ? "Há 1 aula incompleta" : `Há ${invalidas.length} aulas incompletas`}: complete-as (ou
          elimine-as) para poder aplicar. Não aparecem na pré-visualização.
        </Alert>
      )}

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Pré-visualização · clique numa aula para a editar
        </h2>
        {events.length > 0 ? (
          <HorarioCalendar events={events} selectedId={selectedId} onSelect={setSelectedId} />
        ) : (
          <div className="rounded-xl bg-white p-8 text-center text-gray-500 shadow">
            Sem aulas. O calendário não aparece na página pública.
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <section className="space-y-3 rounded-xl bg-white p-5 shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-blue-900">Aulas ({aulas.length})</h2>
            <button
              type="button"
              onClick={add}
              className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-blue-900 shadow hover:bg-yellow-300"
            >
              + Nova aula
            </button>
          </div>
          <ul className="max-h-[28rem] divide-y overflow-y-auto">
            {sorted.map((a) => {
              const p = problema(a);
              return (
                <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(a.id)}
                    className={`flex w-full items-center gap-3 px-2 py-2 text-left text-sm hover:bg-gray-50 ${
                      a.id === selectedId ? "bg-yellow-50" : ""
                    }`}
                  >
                    <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: a.cor }} />
                    <span className="w-16 shrink-0 text-gray-600">{DIAS_SEMANA[a.dia_semana]}</span>
                    <span className="w-24 shrink-0 text-gray-600">
                      {a.inicio || "--:--"}–{a.fim || "--:--"}
                    </span>
                    <span className="truncate font-medium">{a.titulo || "(sem título)"}</span>
                    {p && <span className="ml-auto shrink-0 text-xs font-semibold text-red-700">incompleta</span>}
                    {a.id < 0 && !p && <span className="ml-auto shrink-0 text-xs font-semibold text-green-700">nova</span>}
                  </button>
                </li>
              );
            })}
            {aulas.length === 0 && <li className="py-6 text-center text-sm text-gray-500">Ainda não há aulas.</li>}
          </ul>
        </section>

        <section className="rounded-xl bg-white p-5 shadow">
          {selected ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-blue-900">Editar aula</h2>
                <button
                  type="button"
                  onClick={() => remove(selected.id)}
                  className="rounded-full px-3 py-1 text-sm font-semibold text-red-700 hover:bg-red-50"
                >
                  Eliminar aula
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="block text-xs font-medium text-gray-600">
                  Dia
                  <select
                    value={selected.dia_semana}
                    onChange={(e) => update(selected.id, { dia_semana: Number(e.target.value) })}
                    className={`${inputClass} mt-1`}
                  >
                    {DIAS_SEMANA.map((d, i) => (
                      <option key={d} value={i}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs font-medium text-gray-600">
                  Início
                  <input
                    type="time"
                    value={selected.inicio}
                    onChange={(e) => update(selected.id, { inicio: e.target.value })}
                    className={`${inputClass} mt-1`}
                  />
                </label>
                <label className="block text-xs font-medium text-gray-600">
                  Fim
                  <input
                    type="time"
                    value={selected.fim}
                    onChange={(e) => update(selected.id, { fim: e.target.value })}
                    className={`${inputClass} mt-1`}
                  />
                </label>
              </div>
              <label className="block text-xs font-medium text-gray-600">
                Título
                <input
                  value={selected.titulo}
                  maxLength={150}
                  onChange={(e) => update(selected.id, { titulo: e.target.value })}
                  className={`${inputClass} mt-1`}
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-xs font-medium text-gray-600">
                  Sala / local
                  <input
                    value={selected.sala}
                    maxLength={100}
                    onChange={(e) => update(selected.id, { sala: e.target.value })}
                    className={`${inputClass} mt-1`}
                  />
                </label>
                <label className="block text-xs font-medium text-gray-600">
                  Cor
                  <select
                    value={selected.cor}
                    onChange={(e) => update(selected.id, { cor: e.target.value })}
                    className={`${inputClass} mt-1`}
                  >
                    {!CORES_HORARIO.some((c) => c.value === selected.cor) && (
                      <option value={selected.cor}>{selected.cor}</option>
                    )}
                    {CORES_HORARIO.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {problema(selected) && <p className="text-sm text-red-700">{problema(selected)}</p>}
              <p className="text-xs text-gray-500">
                A pré-visualização atualiza logo, mas o site só muda quando carregar em <strong>Aplicar</strong>.
              </p>
            </div>
          ) : (
            <p className="py-10 text-center text-sm text-gray-500">
              Escolha uma aula na lista ou no calendário, ou adicione uma nova.
            </p>
          )}
        </section>
      </div>
    </form>
  );
}
