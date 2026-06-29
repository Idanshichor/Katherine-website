import type { Metadata } from "next";
import AboutPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Quién es Katherine Velasquez — Mi Historia | Estratega 360",
  description: "Conoce la historia, trayectoria e hitos de Katherine Velasquez. De ingeniera civil y emprendedora a estratega de negocios y marcas personales.",
  alternates: {
    canonical: "https://www.ktvelasquez.com/sobre-mi",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://www.ktvelasquez.com/sobre-mi/#profile",
        "url": "https://www.ktvelasquez.com/sobre-mi",
        "mainEntity": {
          "@id": "https://www.ktvelasquez.com/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ktvelasquez.com/sobre-mi/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.ktvelasquez.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sobre Mí",
            "item": "https://www.ktvelasquez.com/sobre-mi"
          }
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
      <AboutPageClient />
    </>
  );
}
