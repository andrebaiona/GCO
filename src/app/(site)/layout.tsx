import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import SponsorsSection from "@/components/layout/SponsorsSection";
import { Analytics } from "@vercel/analytics/next";

// Public-site chrome. Lives in the (site) route group so the admin panel
// (src/app/admin) renders without the public navigation.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Analytics />
      <SponsorsSection />
      <Footer />
    </>
  );
}
