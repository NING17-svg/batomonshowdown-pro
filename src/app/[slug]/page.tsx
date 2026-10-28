import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getIndexablePages, getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function isRootFixedPage(url: string): boolean {
  return url !== "/" && url.split("/").filter(Boolean).length === 1;
}

export function generateStaticParams() {
  return getIndexablePages()
    .filter((page) => isRootFixedPage(page.url))
    .map((page) => ({ slug: page.url.split("/").filter(Boolean)[0] }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByUrl(`/${slug}`);
  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByUrl(`/${slug}`);
  if (!page) notFound();

  return (
    <PageShell locale={page.locale} currentUrl={page.url}>
      <PageRenderer page={page} />
    </PageShell>
  );
}
