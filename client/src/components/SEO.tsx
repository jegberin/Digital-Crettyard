import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export function SEO({ title, description, canonicalPath = "/", noindex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://digital.crettyard.ie${canonicalPath === "/" ? "/" : canonicalPath + ".html"}`;
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, follow");
    } else {
      if (robotsMeta) {
        robotsMeta.removeAttribute("content");
        robotsMeta.setAttribute("content", "index, follow");
      }
    }
  }, [title, description, canonicalPath, noindex]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Crettyard Digital",
    description: "Web design, Microsoft 365 setup, and network solutions for small businesses in Laois, Carlow, Kilkenny, and surrounding areas.",
    url: "https://digital.crettyard.ie",
    email: "info@crettyard.ie",
    telephone: "+353879700701",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Crettyard",
      addressRegion: "Co. Laois",
      addressCountry: "IE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.8534,
      longitude: -7.1574
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "County Laois" },
      { "@type": "AdministrativeArea", name: "County Carlow" },
      { "@type": "AdministrativeArea", name: "County Kilkenny" },
      { "@type": "AdministrativeArea", name: "County Kildare" }
    ],
    serviceType: ["Web Design", "Microsoft 365 Setup", "Network & Wi-Fi Solutions", "Business Email Setup", "Website Maintenance"],
    priceRange: "€€"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description }: { name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Crettyard Digital",
      url: "https://digital.crettyard.ie"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Laois, Carlow, Kilkenny, Ireland"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Crettyard Digital",
    description: "Run by Joey, Crettyard Digital brings enterprise IT experience to small businesses in Laois, Carlow, and Kilkenny. Plain English, no jargon, direct communication.",
    url: "https://digital.crettyard.ie/about",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Crettyard Digital",
      url: "https://digital.crettyard.ie"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Crettyard Digital",
    description: "Get in touch for a free, no-obligation chat about your website, email, or network needs. Fast response, local support, plain-English advice.",
    url: "https://digital.crettyard.ie/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Crettyard Digital",
      url: "https://digital.crettyard.ie",
      email: "info@crettyard.ie",
      telephone: "+353879700701"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
