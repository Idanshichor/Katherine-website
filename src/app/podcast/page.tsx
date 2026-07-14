import type { Metadata } from "next";
import PodcastPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Estrategia 360 - Sin Pelos en la Lengua | Katherine Velasquez",
  description: "Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
  alternates: {
    canonical: "https://www.ktvelasquez.com/podcast",
  },
};

export default function PodcastPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": "https://www.ktvelasquez.com/podcast/#podcast",
    "name": "Estrategia 360 - Sin Pelos en la Lengua",
    "description": "Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
    "url": "https://www.ktvelasquez.com/podcast",
    "author": {
      "@type": "Person",
      "@id": "https://www.ktvelasquez.com/#person"
    },
    "inLanguage": ["es", "en"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PodcastPageClient />
    </>
  );
}
