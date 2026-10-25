# Swayam Portfolio

Next.js App Router portfolio using the Option B palette and the scroll-craft chaptered editorial direction.

## Run locally

```bash
npm install --omit=optional
npm run dev
```

The dev and build scripts use Next.js's matching WASM compiler package. The optional native compiler can fail to load on this Windows setup.

## Add projects and reviews

Add permissioned projects to `src/content/portfolio.ts`. Keep summaries and outcomes verifiable. Add approved testimonials there with a source URL for any Google review. The page shows honest empty states while those arrays are empty.

The main contact action currently opens the LinkedIn profile supplied in `SEO Experience.md`. Replace it with a booking link when one is available. No Google Reviews API connection or contact form backend is configured.

## Optional imagery

See `image-prompts.json`. The page works without generated images; the search-to-enquiry diagram is interactive HTML and does not rely on an image.
