# Portfolio Website

A minimal, modern, and elegant single-page portfolio website built with Next.js, TypeScript, TailwindCSS, Shadcn/UI, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, TailwindCSS
- **Beautiful UI**: Shadcn/UI components with custom styling
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Responsive Design**: Mobile-first approach with clean, white aesthetic
- **Interactive Demo**: Automated shopping cart showcase with animations
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Typography**: Inter font for clean, modern typography

## Components

- `Header.tsx` - Navigation header with smooth scroll links
- `Hero.tsx` - Landing section with animated introduction
- `Showcase.tsx` - Interactive automated shopping cart demo
- `About.tsx` - Skills, experience, and personal story
- `Footer.tsx` - Contact information and social links
- `FadeIn.tsx` - Reusable animation wrapper component

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project is optimized for Vercel with proper build configuration and static generation.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful, accessible UI components
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── About.tsx
│   ├── FadeIn.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Showcase.tsx
└── lib/
    └── utils.ts
```

## Customization

- Update personal information in the `About.tsx` component
- Modify the showcase demo in `Showcase.tsx`
- Customize colors and styling in `tailwind.config.js`
- Add new sections by creating components and importing them in `page.tsx`

## License

MIT License - feel free to use this template for your own portfolio!
