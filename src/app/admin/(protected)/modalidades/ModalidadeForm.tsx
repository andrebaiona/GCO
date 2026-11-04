"use client";

import { useActionState } from "react";
import Link from "next/link";
import SubmitButton from "../../_components/SubmitButton";
import Alert from "../../_components/Alert";
import type { FormState } from "../../_lib/form";

export type ModalidadeFormValues = {
  nome: string;
  slug: string;
  icone: string;
  descricao: string;
  categoria: string;
  email: string;
  ativo: boolean;
};

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

function Field({
  name,
  label,
  hint,
  error,
  children,
}: {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {hint && <span className="ml-2 font-normal text-gray-500">{hint}</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export default function ModalidadeForm({
  action,
  initial,
  categorias,
  icones,
  submitLabel,
  cancelHref,
  editingSlug = false,
}: {
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  initial: ModalidadeFormValues;
  categorias: string[];
  icones: string[];
  submitLabel: string;
  cancelHref?: string;
  /** True when editing: changing the slug changes the public URL. */
  editingSlug?: boolean;
}) {
  const [state, formAction] = useActionState<FormState, FormData>(action, {});
  const fe = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5 rounded-xl bg-white p-6 shadow-lg">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      {state.success && <Alert kind="success">{state.success}</Alert>}

      <div className="grid gap-5 md:grid-cols-2">
        <Field name="nome" label="Nome" error={fe.nome}>
          <input id="nome" name="nome" required maxLength={100} defaultValue={initial.nome} className={inputClass} />
        </Field>

        <Field
          name="slug"
          label="Endereço (slug)"
          hint={editingSlug ? "mude com cuidado" : "opcional, gerado a partir do nome"}
          error={fe.slug}
        >
          <input
            id="slug"
            name="slug"
            maxLength={100}
            defaultValue={initial.slug}
            autoCapitalize="none"
            spellCheck={false}
            className={inputClass}
          />
          {editingSlug && (
            <p className="mt-1 text-xs text-gray-500">
              É o endereço público (/modalidades/…). Alguns blocos da página (horários, ginástica, xadrez, hóquei)
              dependem do slug atual: só o altere se souber o que está a fazer.
            </p>
          )}
        </Field>

        <Field name="categoria" label="Categoria" hint="usada para ligar as notícias à modalidade" error={fe.categoria}>
          <input
            id="categoria"
            name="categoria"
            list="categorias-sugeridas"
            maxLength={100}
            defaultValue={initial.categoria}
            className={inputClass}
          />
          <datalist id="categorias-sugeridas">
            {categorias.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </Field>

        <Field name="email" label="Email de contacto" error={fe.email}>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={254}
            defaultValue={initial.email}
            className={inputClass}
          />
        </Field>

        <Field name="icone" label="Ícone" hint="emoji ou caminho, ex.: /icones-modalidades/xadrez.png" error={fe.icone}>
          <input
            id="icone"
            name="icone"
            list="icones-sugeridos"
            maxLength={255}
            defaultValue={initial.icone}
            className={inputClass}
          />
          <datalist id="icones-sugeridos">
            {icones.map((i) => (
              <option key={i} value={i} />
            ))}
          </datalist>
        </Field>

        <div className="flex items-end">
          <label className="flex items-center gap-2 pb-2 text-sm text-gray-700">
            <input type="checkbox" name="ativo" defaultChecked={initial.ativo} />
            Inscrições abertas (ativa)
          </label>
        </div>
      </div>

      <Field name="descricao" label="Descrição" error={fe.descricao}>
        <textarea
          id="descricao"
          name="descricao"
          rows={4}
          maxLength={10000}
          defaultValue={initial.descricao}
          className={inputClass}
        />
      </Field>

      <div className="flex items-center gap-3">
        <SubmitButton>{submitLabel}</SubmitButton>
        {cancelHref && (
          <Link href={cancelHref} className="rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
            Cancelar
          </Link>
        )}
      </div>
    </form>
  );
}
