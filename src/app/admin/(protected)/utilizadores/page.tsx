import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/dal";
import { ChangePasswordForm, CreateUserForm, DeleteUserButton } from "./UserForms";

const dateTime = new Intl.DateTimeFormat("pt-PT", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Lisbon",
});

export default async function UtilizadoresPage() {
  const admin = await requireAdmin();
  const users = await prisma.admin_users.findMany({
    orderBy: { username: "asc" },
    select: { id: true, username: true, created_at: true, last_login_at: true, locked_until: true },
  });
  const canDelete = users.length > 1;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-blue-900">Utilizadores</h1>

      <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="px-4 py-3">Utilizador</th>
              <th className="px-4 py-3">Criado em</th>
              <th className="px-4 py-3">Último acesso</th>
              <th className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((u) => {
              const locked = u.locked_until && u.locked_until.getTime() > Date.now();
              return (
                <tr key={u.id}>
                  <td className="px-4 py-3 font-medium">
                    {u.username}
                    {u.id === admin.id && <span className="ml-2 text-xs text-gray-500">(você)</span>}
                    {locked && (
                      <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-800">bloqueado</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{dateTime.format(u.created_at)}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {u.last_login_at ? dateTime.format(u.last_login_at) : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end">
                      {canDelete && u.id !== admin.id && <DeleteUserButton id={u.id} username={u.username} />}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold text-blue-900">Novo utilizador</h2>
          <CreateUserForm />
        </section>
        <section className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold text-blue-900">Alterar a minha palavra-passe</h2>
          <ChangePasswordForm />
        </section>
      </div>
    </div>
  );
}
