import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FenixGxSite } from "@/components/fenix-gx-site";
import { CONTENT, isLocale, type Locale } from "@/lib/content";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return params.then(({ lang }) => {
    if (!isLocale(lang)) return {};
    const content = CONTENT[lang];
    const title = lang === "es" ? "FenixGx — software propio, ingeniería con contexto" : "FenixGx — proprietary software, engineering with context";
    return {
      title,
      description: content.hero.lead,
      alternates: {
        canonical: `/${lang}`,
        languages: { es: "/es", en: "/en" },
      },
      openGraph: { locale: lang === "es" ? "es_ES" : "en_GB", title, description: content.hero.lead },
    };
  });
}

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fenixgx.com/#organization",
    name: "FenixGx",
    legalName: "FENIXGX LIMITED",
    url: "https://fenixgx.com",
    logo: "https://fenixgx.com/assets/fenixgx-emblem-dark.png",
    foundingDate: "2026-06-03",
    identifier: { "@type": "PropertyValue", name: "Companies House Company Number", value: "SC891752" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 St. Conans Road, Lochawe",
      addressLocality: "Dalmally",
      addressRegion: "Scotland",
      postalCode: "PA33 1AL",
      addressCountry: "GB",
    },
    founder: {
      "@type": "Person",
      "@id": "https://fenixgx.com/#founder",
      name: "Rodolfo Giannotti",
      jobTitle: "Founder",
      sameAs: ["https://www.linkedin.com/in/rodolfo-giannotti/"],
    },
    subOrganization: [
      { "@type": "Organization", "@id": "https://www.iamenu.ai/#organization", name: "IAMenu" },
      { "@type": "Organization", "@id": "https://taski.life/#organization", name: "Taski" },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><FenixGxSite content={CONTENT[lang as Locale]} /></>;
}
