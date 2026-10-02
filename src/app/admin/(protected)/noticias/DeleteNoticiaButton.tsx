"use client";

import { deleteNoticia } from "./actions";

export default function DeleteNoticiaButton({ id, titulo }: { id: number; titulo: string }) {
  return (
    <form
      action={deleteNoticia}
      onSubmit={(e) => {
        if (!confirm(`Eliminar a notícia "${titulo}"? Esta ação não pode ser desfeita.`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="rounded-full px-3 py-1 text-sm font-semibold text-red-700 hover:bg-red-50">
        Eliminar
      </button>
    </form>
  );
}
