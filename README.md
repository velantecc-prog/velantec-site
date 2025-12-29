# VELANTEC Corporate Website

A modern, professional website for VELANTEC, the parent company for multiple innovative digital brands.

## Overview

This website showcases VELANTEC as a sophisticated parent company and provides clear navigation to subsidiary brands:
- **mrassistant.ai** - AI voice agents & IVR automation
- **buzzzbuzzz.com** - Digital engagement experiences
- **growthlab.sg** - Startup & founder community
- **onestopsg.com** - End-to-end ecommerce & services

## Features

- ✨ Modern, minimal design inspired by boutique studio aesthetics
- 📱 Fully responsive for desktop, tablet, and mobile
- 🎨 Smooth animations and transitions using Framer Motion
- 🚀 Built with Next.js 16, TypeScript, and Tailwind CSS
- ♿ Accessible and SEO-optimized
- 🎯 Smooth scroll navigation with sticky header

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd velantec-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
velantec-website/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── privacy/        # Privacy policy page
│   ├── terms/          # Terms & conditions page
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── not-found.tsx   # 404 page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Sticky navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Portfolio/Brands section
│   ├── Vision.tsx      # Vision & Values section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your repository and set build command to `npm run build`
- **AWS Amplify**: Connect repository and configure build settings
- **Docker**: Build and deploy using the included Dockerfile (if created)

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Updating Brand Information

Edit the `brands` array in `components/Portfolio.tsx` to update brand details.

### Changing Colors

Modify Tailwind classes in components or update the color scheme in `tailwind.config.js` (if using custom config).

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Include Navigation and Footer components
4. Add route to Navigation component

## Content Management

Currently, content is managed directly in the component files. For a CMS integration, consider:

- **Contentful**: Headless CMS
- **Sanity**: Real-time collaborative CMS
- **Strapi**: Open-source headless CMS
- **Markdown files**: Simple markdown-based content

## SEO

The site includes:
- Meta titles and descriptions
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy
- Alt text for images (add when images are included)

## Performance

- Optimized images (when using Next.js Image component)
- Code splitting with Next.js
- Lazy loading for animations
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 VELANTEC. All rights reserved.

## Contact

For questions or support, contact: hello@velantec.com
