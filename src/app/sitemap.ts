import type { MetadataRoute } from "next";
import {
  getIndexablePages,
  getLanguageAlternates,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/urls";
import type { PageContent } from "@/types/content";

export const dynamic = "force-static";

export function buildSitemapEntries(
  pages: PageContent[],
): MetadataRoute.Sitemap {
  const canonicalSitemapUrl = (path: string) => {
    if (path === "/") return absoluteUrl(path);
    return absoluteUrl(`${path.replace(/\/+$/, "")}/`);
  };

  return pages.map((page) => ({
    url: canonicalSitemapUrl(page.url),
    lastModified: page.lastReviewed,
    changeFrequency: page.pageType === "home" ? "daily" : "weekly",
    priority:
      page.pageType === "home" ? 1 : page.routeKind === "entity-detail" ? 0.7 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        Object.entries(getLanguageAlternates(page, pages)).map(([locale, url]) => [
          locale,
          canonicalSitemapUrl(url),
        ]),
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries(getIndexablePages());
}
