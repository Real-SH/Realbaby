const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProjectUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

function normalizeUrl(value: string) {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

export const siteUrl = normalizeUrl(
  configuredSiteUrl || vercelProjectUrl || "https://www.realbabytoy.com"
);

// Keep previews out of search results until the production domain is approved.
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";