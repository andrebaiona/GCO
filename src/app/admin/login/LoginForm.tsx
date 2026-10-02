"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import SubmitButton from "../_components/SubmitButton";
import Alert from "../_components/Alert";
import type { FormState } from "../_lib/form";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20";

export default function LoginForm() {
  const [state, formAction] = useActionState<FormState, FormData>(loginAction, {});

  return (
    <form action={formAction} className="space-y-5">
      {state.error && <Alert kind="error">{state.error}</Alert>}
      <div>
        <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-700">
          Utilizador
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          maxLength={50}
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
          Palavra-passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          maxLength={256}
          autoComplete="current-password"
          className={inputClass}
        />
      </div>
      <SubmitButton pendingText="A entrar…" className="w-full">
        Entrar
      </SubmitButton>
    </form>
  );
}
