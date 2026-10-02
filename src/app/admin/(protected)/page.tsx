import { redirect } from "next/navigation";
import { adminHref } from "@/lib/admin/paths";

export default function AdminIndex() {
  redirect(adminHref("noticias"));
}
