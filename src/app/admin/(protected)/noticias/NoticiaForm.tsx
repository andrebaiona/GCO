"use client";

import { startTransition, useActionState, useEffect, useState, useTransition } from "react";
import Link from "next/link";
import SubmitButton from "../../_components/SubmitButton";
import Alert from "../../_components/Alert";
import type { FormState } from "../../_lib/form";
import { ACCEPTED_TYPES, prepareImage } from "./prepareImage";

// Vercel rejects request bodies over 4.5 MB; keep some headroom for the text fields.
const MAX_REQUEST_IMAGE_BYTES = 4 * 1024 * 1024;

export type NoticiaFormValues = {
  titulo: string;
  data_publicacao: string; // yyyy-mm-dd
  categoria: string;
  autor: string;
  resumo: string;
  conteudo: string;
  imagem: string | null; // displayable URL of the current image
  imagem_extra: string | null;
};

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1 text-sm text-red-700">{message}</p> : null;
}

function Label({ htmlFor, children, hint }: { htmlFor: string; children: React.ReactNode; hint?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-gray-700">
      {children}
      {hint && <span className="ml-2 font-normal text-gray-500">{hint}</span>}
    </label>
  );
}

function ImageInput({
  name,
  label,
  current,
  error,
}: {
  name: "imagem" | "imagem_extra";
  label: string;
  current: string | null;
  error?: string;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [remove, setRemove] = useState(false);

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview);
  }, [preview]);

  const shown = preview ?? (remove ? null : current);

  return (
    <div>
      <Label htmlFor={name} hint="JPG, PNG ou WebP">
        {label}
      </Label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex h-32 w-48 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50">
          {shown ? (
            <img src={shown} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-xs text-gray-400">Sem imagem</span>
          )}
        </div>
        <div className="space-y-2 text-sm">
          <input
            id={name}
            name={name}
            type="file"
            accept={ACCEPTED_TYPES.join(",")}
            onChange={(e) => {
              const f = e.target.files?.[0];
              setPreview(f ? URL.createObjectURL(f) : null);
            }}
            className="block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-800 hover:file:bg-blue-100"
          />
          {current && !preview && (
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                name={`${name}_remover`}
                checked={remove}
                onChange={(e) => setRemove(e.target.checked)}
              />
              Remover imagem atual
            </label>
          )}
          {preview && <p className="text-gray-500">A nova imagem substitui a atual ao guardar.</p>}
        </div>
      </div>
      <FieldError message={error} />
    </div>
  );
}

export default function NoticiaForm({
  action,
  initial,
  categorias,
  cancelHref,
  submitLabel,
}: {
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  initial: NoticiaFormValues;
  categorias: string[];
  cancelHref: string;
  submitLabel: string;
}) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(action, {});
  const [preparing, startPreparing] = useTransition();
  const [clientError, setClientError] = useState<string | null>(null);
  const fe = state.fieldErrors ?? {};
  const busy = isPending || preparing;

  // Submit via onSubmit (not the form `action` prop) so React doesn't reset the
  // fields after a validation error, and so images can be downscaled first.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setClientError(null);

    startPreparing(async () => {
      let total = 0;
      for (const field of ["imagem", "imagem_extra"] as const) {
        const value = formData.get(field);
        if (value instanceof File && value.size > 0) {
          const prepared = await prepareImage(value);
          formData.set(field, prepared);
          total += prepared.size;
        }
      }
      if (total > MAX_REQUEST_IMAGE_BYTES) {
        setClientError("As imagens são demasiado grandes (máximo 4 MB no total). Use imagens mais pequenas.");
        return;
      }
      // State updates after an await lose the transition context (React 19), so re-enter one.
      startTransition(() => formAction(formData));
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-lg">
      {(state.error || clientError) && <Alert kind="error">{state.error ?? clientError}</Alert>}

      <div>
        <Label htmlFor="titulo">Título *</Label>
        <input id="titulo" name="titulo" required maxLength={200} defaultValue={initial.titulo} className={inputClass} />
        <FieldError message={fe.titulo} />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <Label htmlFor="data_publicacao">Data de publicação *</Label>
          <input
            id="data_publicacao"
            name="data_publicacao"
            type="date"
            required
            defaultValue={initial.data_publicacao}
            className={inputClass}
          />
          <FieldError message={fe.data_publicacao} />
        </div>
        <div>
          <Label htmlFor="categoria">Categoria</Label>
          <select id="categoria" name="categoria" defaultValue={initial.categoria} className={inputClass}>
            <option value="">Sem categoria</option>
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <FieldError message={fe.categoria} />
        </div>
        <div>
          <Label htmlFor="autor">Autor</Label>
          <input id="autor" name="autor" maxLength={100} defaultValue={initial.autor} className={inputClass} />
          <FieldError message={fe.autor} />
        </div>
      </div>

      <ImageInput name="imagem" label="Imagem principal" current={initial.imagem} error={fe.imagem} />

      <div>
        <Label htmlFor="resumo" hint="Deixe uma linha em branco para separar parágrafos.">
          Resumo
        </Label>
        <textarea id="resumo" name="resumo" rows={4} defaultValue={initial.resumo} className={inputClass} />
        <FieldError message={fe.resumo} />
      </div>

      <ImageInput
        name="imagem_extra"
        label="Imagem extra"
        current={initial.imagem_extra}
        error={fe.imagem_extra}
      />

      <div>
        <Label htmlFor="conteudo" hint="Deixe uma linha em branco para separar parágrafos.">
          Conteúdo
        </Label>
        <textarea id="conteudo" name="conteudo" rows={14} defaultValue={initial.conteudo} className={inputClass} />
        <FieldError message={fe.conteudo} />
      </div>

      <div className="flex items-center justify-end gap-3 border-t pt-6">
        <Link href={cancelHref} className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100">
          Cancelar
        </Link>
        <SubmitButton pending={busy} pendingText={preparing ? "A preparar imagens…" : "A guardar…"}>
          {submitLabel}
        </SubmitButton>
      </div>
    </form>
  );
}
