# Dalbir Singh Badwal — Portfolio

Personal portfolio site for **Dalbir Singh Badwal**, Operations Manager at GardaWorld (Halifax, NS).

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Spline 3D, and tsparticles.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx        Root layout + fonts (Bricolage Grotesque + Inter)
  page.tsx          Landing page (Spline robot + intro)
  globals.css       Global styles
  about/page.tsx    About page (experience + certifications)
  contact/page.tsx  Contact page (form + info cards)
components/
  Navbar.tsx        Top navigation
  SplineScene.tsx   3D scene wrapper
  ui/
    sparkles.tsx    Particle background
    glow-card.tsx   Mouse-tracked glow card
lib/
  utils.ts          cn() class merger
```

## Customization

**Email:** edit `app/contact/page.tsx`, search for `contact@example.com`.

**Spline scene:** edit `app/page.tsx`, replace the scene URL.

**Accent color:** edit `tailwind.config.ts`, the `accent` color block.

**Experience / certifications:** edit the arrays at the top of `app/about/page.tsx`.
