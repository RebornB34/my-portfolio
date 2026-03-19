# Brian Bundi - Cyber Portfolio

A modern, sleek dark-mode developer portfolio built with Next.js 15, featuring a deep navy "Cyber" aesthetic, responsive flex layouts, and custom animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with custom utility configurations)
- **Icons:** Lucide React
- **Font:** Fira Code (Monospace cyber aesthetic globally)

## Features

- Sleek Cyber design with deep navy backgrounds and glowing cyan/blue accents
- Responsive single-page scrolling layout replacing rigid grids
- Real-time digital clock built directly into the sticky navigation
- Dynamic, interactive sections:
  - **Hero Profile**: Animated shield and gradient text.
  - **About Me**: Feature cards highlighting cybersecurity focus.
  - **Technical Skills**: Animated progress bars and statistic widgets.
  - **Projects Showcase**: Standardized terminal console block.
  - **Contact Form**: Professionally designed layout with modern inputs.
- Dark mode native out-of-the-box.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with Fira Code fonts and metadata
│   ├── page.tsx        # Main scrolling portfolio page
│   └── globals.css     # Cyber theme CSS variables and styling
├── components/
│   └── portfolio/
│       ├── navbar.tsx      # Sticky navigation with clock
│       ├── hero.tsx        # Hero section with name and buttons
│       ├── about.tsx       # Timeline and feature cards
│       ├── skills.tsx      # Stats and precise skill progress
│       ├── projects.tsx    # Showcase terminal interface
│       └── contact.tsx     # Contact info and form
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RebornB34/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies (Using PNPM is strictly enforced for optimal caching like Vercel):
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

To personalize this portfolio:

1. Update the name, title, profile avatar and resume link in `components/portfolio/hero.tsx`
2. Modify cybersecurity skill tags and values in `components/portfolio/skills.tsx`
3. Add your actual projects to `components/portfolio/projects.tsx`
4. Update contact details in `components/portfolio/contact.tsx`

## License

MIT License - feel free to use this template for your own portfolio.
