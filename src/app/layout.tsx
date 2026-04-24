import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KT Impulso Empresarial | Project Management & Strategy",
  description: "360° Strategy Specialist bridging Civil Engineering logic with Digital Marketing execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]`}>
        {children}
      </body>
    </html>
  );
}
