# Realbaby Next.js Website

B2B product and inquiry website for Realbaby. The repository is the source of truth for the Vercel project named `realbaby`.

## Key Locations

- `app/page.tsx`: homepage structure and sections
- `app/data.ts`: product categories and product records
- `app/products/`: product listing and product detail templates
- `app/insights/data.ts`: buyer guides and SEO insight content
- `app/contact/page.tsx`: contact page and inquiry form
- `app/api/inquiries/route.ts`: inquiry validation, storage, and forwarding
- `app/globals.css` and `app/home.module.css`: global and homepage styles
- `public/`: logos, product images, compliance images, catalog, and video

## Local Commands

```powershell
npm install
npm run dev
npm run build
npm run start
```

## Preview Safety

The Vercel preview must remain out of search results until the formal domain launch is approved.

```env
NEXT_PUBLIC_SITE_URL=https://realbaby.vercel.app
NEXT_PUBLIC_ALLOW_INDEXING=false
```

With indexing disabled, pages emit `noindex`, `robots.txt` disallows crawling, and canonical/sitemap URLs use the configured preview URL.

## Inquiry Delivery

Configure at least one production delivery method in Vercel:

```env
INQUIRY_FORWARD_WEBHOOK_URL=
RESEND_API_KEY=
INQUIRY_TARGET_EMAIL=
INQUIRY_FROM_EMAIL=
```

Do not commit real secrets or `.env.local`. Without a webhook or Resend configuration, the production API returns a clear service-unavailable response instead of reporting a false success.

## Deployment

- GitHub: `https://github.com/Real-SH/Realbaby`
- Vercel preview: `https://realbaby.vercel.app`
- Formal domain: `realbabytoy.com` (do not bind or switch until final approval)

Pushes to `main` deploy automatically to the linked Vercel project. Before pushing, run `npm run build` and review `git status`.

## Formal Domain Launch Checklist

1. Configure and test real inquiry delivery.
2. Complete desktop and mobile QA for homepage, product pages, contact form, WhatsApp, metadata, and assets.
3. Back up any useful content from the old WordPress site.
4. Bind `realbabytoy.com` to the Vercel `realbaby` project only after explicit approval.
5. Set `NEXT_PUBLIC_SITE_URL=https://www.realbabytoy.com`.
6. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and redeploy.
7. Verify DNS, HTTPS, canonical URLs, `robots.txt`, sitemap, forms, and analytics.

## Privacy

Never publish raw audit reports, customer names, supplier details, addresses, signatures, certificate numbers, email addresses, phone numbers, or QR/barcode data. Public compliance images must use the approved redacted versions in `public/images/compliance/`.
