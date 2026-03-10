# Brian Bundi - Portfolio

A modern, brutalist-inspired developer portfolio built with Next.js 15, featuring a terminal/hacker aesthetic with a bento grid layout.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** JetBrains Mono (monospace terminal aesthetic)

## Features

- Brutalist design with sharp corners and bold typography
- Terminal/hacker aesthetic with neon green accents
- Bento grid layout for content organization
- Animated server log education section
- Scrolling contact marquee
- Fully responsive design
- Dark mode by default

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and CSS variables
├── components/
│   └── portfolio/
│       ├── bento-grid.tsx           # Main bento grid container
│       └── blocks/
│           ├── hero-block.tsx       # Hero section with name
│           ├── tech-stack-block.tsx # Skills and technologies
│           ├── project-block.tsx    # Featured project showcase
│           ├── education-block.tsx  # Animated education log
│           └── contact-marquee.tsx  # Scrolling contact info
├── lib/
│   └── utils.ts        # Utility functions (cn helper)
└── hooks/
    └── use-terminal.ts # Terminal hook utilities
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RebornB34/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

To personalize this portfolio:

1. Update the name and bio in `components/portfolio/blocks/hero-block.tsx`
2. Modify tech stack in `components/portfolio/blocks/tech-stack-block.tsx`
3. Add your projects in `components/portfolio/blocks/project-block.tsx`
4. Update education details in `components/portfolio/blocks/education-block.tsx`
5. Change contact links in `components/portfolio/blocks/contact-marquee.tsx`

## License

MIT License - feel free to use this template for your own portfolio.
