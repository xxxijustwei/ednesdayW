import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const componentDocs = [
    "autocomplete",
    "button",
    "color-input",
    "color-picker",
    "input",
    "pagination",
    "phone-input",
    "select",
    "tag-input",
  ];

  const hookDocs = [
    "use-countdown",
    "use-device-detection",
    "use-disclosure",
    "use-ripple",
  ];

  const libDocs = ["create2", "wallet-address"];

  for (const component of componentDocs) {
    routes.push({
      url: `${baseUrl}/docs/components/${component}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const hook of hookDocs) {
    routes.push({
      url: `${baseUrl}/docs/hooks/${hook}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const lib of libDocs) {
    routes.push({
      url: `${baseUrl}/docs/lib/${lib}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
