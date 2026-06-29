import type { Metadata } from "next";
import PrivacyPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Política de Privacidad | Katherine Velasquez",
  description: "Política de Tratamiento de Datos Personales de Katherine Velasquez, en cumplimiento de la Ley 1581 de 2012 de Colombia.",
  alternates: {
    canonical: "https://www.ktvelasquez.com/privacidad",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
