"use client";

import { useActionState, useEffect, useRef } from "react";
import SubmitButton from "../../_components/SubmitButton";
import Alert from "../../_components/Alert";
import type { FormState } from "../../_lib/form";
import { deleteEscalao, deleteModalidade, deletePreco } from "./actions";

type Action = (prev: FormState, formData: FormData) => Promise<FormState>;

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

function Cell({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <span className="mb-1 block text-xs font-medium text-gray-600">{label}</span>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

/** Clear the form after a successful submission (used by the "add" forms). */
function useResetOnSuccess(state: FormState, enabled: boolean) {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (enabled && state.success) ref.current?.reset();
  }, [state, enabled]);
  return ref;
}

export type EscalaoValues = {
  nome: string;
  idade_minima: string;
  idade_maxima: string;
  mensalidade: string;
  descricao: string;
};

export function EscalaoForm({
  action,
  initial,
  mode,
}: {
  action: Action;
  initial: EscalaoValues;
  mode: "add" | "edit";
}) {
  const [state, formAction] = useActionState<FormState, FormData>(action, {});
  const ref = useResetOnSuccess(state, mode === "add");
  const fe = state.fieldErrors ?? {};

  return (
    <form ref={ref} action={formAction} className="space-y-3">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      <div className="grid gap-3 md:grid-cols-12">
        <Cell label="Nome" error={fe.nome} className="md:col-span-4">
          <input name="nome" required maxLength={100} defaultValue={initial.nome} className={inputClass} />
        </Cell>
        <Cell label="Idade mín." error={fe.idade_minima} className="md:col-span-2">
          <input name="idade_minima" inputMode="numeric" defaultValue={initial.idade_minima} className={inputClass} />
        </Cell>
        <Cell label="Idade máx." error={fe.idade_maxima} className="md:col-span-2">
          <input name="idade_maxima" inputMode="numeric" defaultValue={initial.idade_maxima} className={inputClass} />
        </Cell>
        <Cell label="Mensalidade (€)" error={fe.mensalidade} className="md:col-span-4">
          <input name="mensalidade" inputMode="decimal" defaultValue={initial.mensalidade} className={inputClass} />
        </Cell>
        <Cell label="Descrição" error={fe.descricao} className="md:col-span-12">
          <textarea name="descricao" rows={2} maxLength={10000} defaultValue={initial.descricao} className={inputClass} />
        </Cell>
      </div>
      <div className="flex items-center gap-3">
        <SubmitButton pendingText="A guardar…">{mode === "add" ? "Adicionar escalão" : "Guardar"}</SubmitButton>
        {state.success && <span className="text-sm text-green-700">{state.success}</span>}
      </div>
    </form>
  );
}

export type PrecoValues = {
  escalao: string;
  tipo: string;
  valor: string;
  observacoes: string;
};

export const TIPOS_PRECO = ["mensalidade", "inscrição", "semestral", "anual", "seguro", "equipamento"];

export function PrecoForm({
  action,
  initial,
  escaloes,
  mode,
}: {
  action: Action;
  initial: PrecoValues;
  /** Selectable escalão names ("Todos" included). */
  escaloes: string[];
  mode: "add" | "edit";
}) {
  const [state, formAction] = useActionState<FormState, FormData>(action, {});
  const ref = useResetOnSuccess(state, mode === "add");
  const fe = state.fieldErrors ?? {};
  // Keep a name that no longer matches any escalão selectable, so saving doesn't silently change it.
  const options = escaloes.includes(initial.escalao) || initial.escalao === "" ? escaloes : [...escaloes, initial.escalao];

  return (
    <form ref={ref} action={formAction} className="space-y-3">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      <div className="grid gap-3 md:grid-cols-12">
        <Cell label="Escalão" error={fe.escalao} className="md:col-span-4">
          <select name="escalao" required defaultValue={initial.escalao} className={inputClass}>
            {initial.escalao === "" && <option value="">Escolher…</option>}
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Cell>
        <Cell label="Tipo" error={fe.tipo} className="md:col-span-3">
          <input name="tipo" required list="tipos-preco" maxLength={30} defaultValue={initial.tipo} className={inputClass} />
        </Cell>
        <Cell label="Valor (€)" error={fe.valor} className="md:col-span-2">
          <input name="valor" inputMode="decimal" defaultValue={initial.valor} className={inputClass} />
        </Cell>
        <Cell label="Observações" error={fe.observacoes} className="md:col-span-3">
          <input name="observacoes" maxLength={10000} defaultValue={initial.observacoes} className={inputClass} />
        </Cell>
      </div>
      <div className="flex items-center gap-3">
        <SubmitButton pendingText="A guardar…">{mode === "add" ? "Adicionar preço" : "Guardar"}</SubmitButton>
        {state.success && <span className="text-sm text-green-700">{state.success}</span>}
      </div>
    </form>
  );
}

export function TiposPrecoDatalist() {
  return (
    <datalist id="tipos-preco">
      {TIPOS_PRECO.map((t) => (
        <option key={t} value={t} />
      ))}
    </datalist>
  );
}

function DeleteButton({
  action,
  fields,
  confirmText,
}: {
  action: (formData: FormData) => Promise<void>;
  fields: Record<string, string | number>;
  confirmText: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmText)) e.preventDefault();
      }}
    >
      {Object.entries(fields).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button type="submit" className="rounded-full px-3 py-1 text-sm font-semibold text-red-700 hover:bg-red-50">
        Eliminar
      </button>
    </form>
  );
}

export function DeleteEscalaoButton({ id, modalidadeId, nome }: { id: number; modalidadeId: number; nome: string }) {
  return (
    <DeleteButton
      action={deleteEscalao}
      fields={{ id, modalidade_id: modalidadeId }}
      confirmText={`Eliminar o escalão "${nome}"? Os preços deste escalão ficam guardados. Esta ação não pode ser desfeita.`}
    />
  );
}

export function DeletePrecoButton({ id, modalidadeId }: { id: number; modalidadeId: number }) {
  return (
    <DeleteButton
      action={deletePreco}
      fields={{ id, modalidade_id: modalidadeId }}
      confirmText="Eliminar este preço? Esta ação não pode ser desfeita."
    />
  );
}

export function DeleteModalidadeButton({ id, nome }: { id: number; nome: string }) {
  return (
    <DeleteButton
      action={deleteModalidade}
      fields={{ id }}
      confirmText={`Eliminar a modalidade "${nome}" com todos os seus escalões, preços e horários? Esta ação não pode ser desfeita.`}
    />
  );
}
