# Mind Clear Studio

A beautiful, modern website built with Next.js 14, React, and Tailwind CSS showcasing AI-powered solutions for everyday life.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 and React 18
- 🎯 TypeScript for type safety
- 🎭 Beautiful UI components with shadcn/ui
- 📱 Fully responsive design
- 🚀 Optimized for Vercel deployment

## Project Structure

```
mind-clear-site/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── Hero.tsx             # Hero section
│   ├── Mission.tsx          # Mission section
│   ├── FeaturedProject.tsx  # Featured project showcase
│   ├── FutureVision.tsx     # Future projects
│   └── Footer.tsx           # Footer with newsletter
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for automatic deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Manual Deployment

You can also deploy manually:

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **shadcn/ui** - UI components
- **Vercel** - Deployment platform

## License

© 2025 Mind Clear Studio. All rights reserved.
