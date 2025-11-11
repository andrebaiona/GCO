"use client";
import { useState, ReactNode } from "react";

export default function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-blue-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-semibold text-blue-800 hover:bg-blue-50 transition"
      >
        <span>{title}</span>
        <span className="text-sm">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-4 pt-2 space-y-2 text-sm">{children}</div>}
    </div>
  );
}