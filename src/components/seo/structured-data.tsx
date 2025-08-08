import { siteConfig } from "@/config/site";
import Script from "next/script";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];
type JsonLdObject = { [key: string]: JsonLdValue };

interface StructuredDataProps {
  type?: "WebSite" | "SoftwareApplication" | "Article" | "Organization";
  customData?: JsonLdObject;
}

export function StructuredData({
  type = "WebSite",
  customData,
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case "WebSite":
        return {
          ...baseData,
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            "@type": "Organization",
            name: siteConfig.author.name,
            url: siteConfig.author.url,
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.url}/docs?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          ...customData,
        };

      case "SoftwareApplication":
        return {
          ...baseData,
          "@type": "SoftwareApplication",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Cross-platform",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.author.url,
          },
          ...customData,
        };

      case "Organization":
        return {
          ...baseData,
          "@type": "Organization",
          name: siteConfig.author.name,
          url: siteConfig.author.url,
          logo: siteConfig.ogImage,
          sameAs: [siteConfig.links.github, siteConfig.links.twitter],
          ...customData,
        };

      case "Article":
        return {
          ...baseData,
          "@type": "Article",
          publisher: {
            "@type": "Organization",
            name: siteConfig.author.name,
            url: siteConfig.author.url,
          },
          author: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.author.url,
          },
          ...customData,
        };

      default:
        return {
          ...baseData,
          ...customData,
        };
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
      strategy="afterInteractive"
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      strategy="afterInteractive"
    />
  );
}

export function FAQStructuredData({
  items,
}: { items: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      strategy="afterInteractive"
    />
  );
}
