import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { BranchProvider } from "./components/Branches";
import FastNavigation from "./components/FastNavigation";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Tortas Dominick | Momentos que se quedan contigo",
  description: "Tortas frescas, personalizadas y llenas de cariño. Elige tu sucursal Dominick y haz tu pedido por WhatsApp.",
  openGraph: { title: "Tortas Dominick", description: "Momentos que saben mejor.", type: "website" },
  twitter: { card: "summary", title: "Tortas Dominick", description: "Momentos que saben mejor." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${display.variable} ${sans.variable}`}><BranchProvider><FastNavigation>{children}</FastNavigation></BranchProvider></body></html>;
}
