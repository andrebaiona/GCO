import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administração · GCO",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

// Never cache or prerender anything under the admin panel.
export const dynamic = "force-dynamic";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-100 text-gray-900">{children}</div>;
}
