import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/admin/session";
import { adminHref } from "@/lib/admin/paths";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (await getCurrentAdmin()) redirect(adminHref("noticias"));

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <img src="/gco-logo.png" alt="GCO" className="mx-auto mb-3 h-16 w-auto" />
          <h1 className="text-xl font-bold text-blue-900">Área de administração</h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
