# Saeed Liaqat’s portfolio

This portfolio uses the existing Next.js 16.4.6 App Router, TypeScript and npm setup. It serves a homepage, project case studies, About, and CV & Certificates.

## Run and check

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check, run:

```sh
npm run lint
npm run build
npx tsc --noEmit
npm start
```

The build generates the route types used by TypeScript. The project requires no environment variables or remote content services. Geist and the images are served from the project.

## Maintain content

- Update the introduction, contact links, skills, timeline and personal details in `content/profile.ts`.
- Add a record to `content/projects.ts` with a unique slug, a publishable image in `public/images/`, its dimensions and alt text, and source-backed case study details. The homepage, case-study route and sitemap use the same data.
- Replace `public/documents/Muhammad-Saeed-Liaqat-CV.pdf` with a public-facing PDF. If the filename changes, update `content/documents.ts` too. Keep the CV and site facts in sync.
- Edit selected certificates and awards in `content/documents.ts`. Use a checked issuer verification link or a PDF approved for publication.
- Set the public canonical URL in `content/site.ts` if the production address changes. Replace the social image in `public/images/social-card.jpg` if the name or role changes.

See [content checklist](docs/content-checklist.md) for source decisions and the document inventory. The repository links to the existing Vercel project. Confirm the production domain opens in a signed-out browser and review the branch before merging changes to the production branch.
