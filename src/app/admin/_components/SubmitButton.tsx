"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  pendingText = "A guardar…",
  pending: pendingProp,
  className = "",
}: {
  children: React.ReactNode;
  pendingText?: string;
  pending?: boolean;
  className?: string;
}) {
  const { pending: formPending } = useFormStatus();
  const pending = pendingProp ?? formPending;
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex items-center justify-center rounded-full bg-blue-800 px-6 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {pending ? pendingText : children}
    </button>
  );
}
