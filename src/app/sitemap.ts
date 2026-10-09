import type { MetadataRoute } from "next";
import { PORTAL_URLS, SITE_URL } from "@/lib/site";

const pages: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/support", changeFrequency: "monthly", priority: 0.5 },
  { path: "/delete-account", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * sitemap.xml: the public site's pages followed by the four portals.
 *
 * @returns The sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(({ path, changeFrequency, priority }) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority })),
    ...[PORTAL_URLS.student, PORTAL_URLS.teacher, PORTAL_URLS.parent, PORTAL_URLS.admin].map((url) => ({
      url,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
