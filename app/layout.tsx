import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Tortas Dominick | Momentos que saben mejor",
  description: "Tortas frescas, personalizadas y llenas de cariño. Elige tu sucursal Dominick y haz tu pedido por WhatsApp.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Tortas Dominick", description: "Momentos que saben mejor.", type: "website", images: [{ url: "/og.png", width: 1760, height: 917, alt: "Tortas Dominick — Momentos que saben mejor" }] },
  twitter: { card: "summary_large_image", title: "Tortas Dominick", description: "Momentos que saben mejor.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
