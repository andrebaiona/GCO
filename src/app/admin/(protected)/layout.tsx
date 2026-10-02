import Link from "next/link";
import { requireAdmin } from "@/lib/admin/dal";
import { adminHref } from "@/lib/admin/paths";
import { logoutAction } from "./actions";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <>
      <header className="bg-blue-900 text-white shadow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href={adminHref("noticias")} className="flex items-center gap-2 font-bold">
              <img src="/gco-logo.png" alt="" className="h-8 w-auto" />
              <span>
                GCO <span className="text-yellow-400">Admin</span>
              </span>
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href={adminHref("noticias")} className="hover:text-yellow-400">
                Notícias
              </Link>
              <Link href={adminHref("utilizadores")} className="hover:text-yellow-400">
                Utilizadores
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-blue-200">{admin.username}</span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-white/40 px-4 py-1.5 hover:border-yellow-400 hover:text-yellow-400"
              >
                Terminar sessão
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </>
  );
}
