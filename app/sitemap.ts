import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onyitechub.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified },
    { url: baseUrl + "/about", lastModified },
    { url: baseUrl + "/ai-ml", lastModified },
    { url: baseUrl + "/automation", lastModified },
    { url: baseUrl + "/publishing", lastModified },
    { url: baseUrl + "/research-automation", lastModified },
    { url: baseUrl + "/rnd", lastModified },
    { url: baseUrl + "/solutions", lastModified },
    { url: baseUrl + "/contact", lastModified },
    { url: baseUrl + "/privacy", lastModified },
    { url: baseUrl + "/terms", lastModified },
  ];
}
