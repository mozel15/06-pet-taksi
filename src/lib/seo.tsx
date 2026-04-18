import { site } from "@/lib/site";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilicankarapettaksi.example.com";
}

export function JsonLdOrganization() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: site.name,
        url,
        email: site.email,
        telephone: `+${site.phoneDigits.replace(/^\+/, "")}`,
        areaServed: { "@type": "Country", name: site.country },
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: site.name,
        inLanguage: "tr-TR",
        publisher: { "@id": `${url}#organization` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${site.shortName} — Pet transfer`,
        provider: { "@id": `${url}#organization` },
        areaServed: { "@type": "AdministrativeArea", name: site.city },
        serviceType: "Pet taşıma ve transfer hizmeti",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
