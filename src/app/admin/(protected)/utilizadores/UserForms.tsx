"use client";

import { useActionState, useEffect, useRef } from "react";
import SubmitButton from "../../_components/SubmitButton";
import Alert from "../../_components/Alert";
import type { FormState } from "../../_lib/form";
import { changeOwnPassword, createUser, deleteUser } from "./actions";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={256}
        autoComplete={autoComplete}
        autoCapitalize="none"
        spellCheck={false}
        className={inputClass}
      />
      {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}

/** Clear the form after a successful submission. */
function useResetOnSuccess(state: FormState) {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.success) ref.current?.reset();
  }, [state]);
  return ref;
}

export function CreateUserForm() {
  const [state, formAction] = useActionState<FormState, FormData>(createUser, {});
  const ref = useResetOnSuccess(state);
  const fe = state.fieldErrors ?? {};

  return (
    <form ref={ref} action={formAction} className="space-y-4">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      {state.success && <Alert kind="success">{state.success}</Alert>}
      <Field name="username" label="Utilizador" autoComplete="off" error={fe.username} />
      <Field name="password" label="Palavra-passe (mín. 12 caracteres)" type="password" autoComplete="new-password" error={fe.password} />
      <Field name="confirm" label="Confirmar palavra-passe" type="password" autoComplete="new-password" error={fe.confirm} />
      <SubmitButton pendingText="A criar…">Criar utilizador</SubmitButton>
    </form>
  );
}

export function ChangePasswordForm() {
  const [state, formAction] = useActionState<FormState, FormData>(changeOwnPassword, {});
  const ref = useResetOnSuccess(state);
  const fe = state.fieldErrors ?? {};

  return (
    <form ref={ref} action={formAction} className="space-y-4">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      {state.success && <Alert kind="success">{state.success}</Alert>}
      <Field name="current" label="Palavra-passe atual" type="password" autoComplete="current-password" error={fe.current} />
      <Field name="password" label="Nova palavra-passe (mín. 12 caracteres)" type="password" autoComplete="new-password" error={fe.password} />
      <Field name="confirm" label="Confirmar nova palavra-passe" type="password" autoComplete="new-password" error={fe.confirm} />
      <SubmitButton>Alterar palavra-passe</SubmitButton>
    </form>
  );
}

export function DeleteUserButton({ id, username }: { id: number; username: string }) {
  return (
    <form
      action={deleteUser}
      onSubmit={(e) => {
        if (!confirm(`Eliminar o utilizador "${username}"?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="rounded-full px-3 py-1 text-sm font-semibold text-red-700 hover:bg-red-50">
        Eliminar
      </button>
    </form>
  );
}
