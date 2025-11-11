import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import SponsorsSection from "@/components/layout/SponsorsSection";
import { calcularIdadeClube } from "@/utils/idadeClube";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const idade = calcularIdadeClube(new Date(1978, 4, 5));

export const metadata: Metadata = {
  title: `Ginásio Clube de Odivelas - ${idade} anos de tradição desportiva`,
  description: "Clube desportivo em Odivelas com modalidades de ginástica, andebol, patinagem artística, hóquei em patins, dança e xadrez. Junte-se à nossa família desportiva!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SponsorsSection />
        <Footer />
      </body>
    </html>
  );
}
