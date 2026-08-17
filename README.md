# Orienťáček Sedlčánky

Moderní web oddílu orientačního běhu Orienťáček Sedlčánky. Obsah je v Markdownu, bez databáze. Nasazení na Cloudflare Workers.

## Vývoj

```bash
npm install
npm run dev
```

## Build a náhled

```bash
npm run build
npm run preview
```

## Nasazení (Cloudflare Workers)

```bash
npx wrangler deploy
```

Konfigurace je ve `wrangler.jsonc` (Workers Assets + Astro adapter).

## Obsah

- Články / aktuality: `src/content/articles/*.md`
- Statické stránky: `src/pages/` (`galerie`, `mapovy-klic`, `velikonocni-orientacek`)
- Galerie: `src/data/gallery.ts`
- Brand assety: `public/brand/` a `public/favicon.png`
- Fotky a média: `public/media/`

Nový článek = nový Markdown soubor ve `src/content/articles/` s frontmatterem `title`, `description`, `pubDate`, volitelně `image` a `gallery`.
