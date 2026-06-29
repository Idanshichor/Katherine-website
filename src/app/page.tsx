import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "Katherine Velasquez | Consultoría Estratégica 360",
  description: "Estratega 360° para fundadores y marcas maduras. Integro estructura de negocio, comunicación y mentalidad para escalar con claridad.",
  alternates: {
    canonical: "https://www.ktvelasquez.com",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.ktvelasquez.com/#website",
        "url": "https://www.ktvelasquez.com",
        "name": "Katherine Velasquez",
        "description": "Consultoría Estratégica 360"
      },
      {
        "@type": "Person",
        "@id": "https://www.ktvelasquez.com/#person",
        "name": "Katherine Velasquez",
        "jobTitle": "Consultora de Estrategia & Marca Personal",
        "url": "https://www.ktvelasquez.com",
        "sameAs": [
          "https://www.linkedin.com/in/katherine-velasquez/"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
