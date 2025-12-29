# Deployment Guide for VELANTEC Website

## Quick Start

The website is built with Next.js 16 and can be deployed to any platform that supports Next.js applications.

## Pre-deployment Checklist

- [ ] Update contact email addresses in `components/Contact.tsx`
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Add actual brand logos to the Portfolio section (currently using icons)
- [ ] Configure form submission endpoint in `components/Contact.tsx`
- [ ] Update phone number in `components/Contact.tsx`
- [ ] Review and customize content in all pages
- [ ] Add favicon and meta images for social sharing
- [ ] Test all links and navigation

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or connect your GitHub repository directly at [vercel.com](https://vercel.com)

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard
   - For form submissions, configure your email service API keys

### Option 2: Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:
   - Connect repository to Netlify
   - Or use Netlify CLI: `netlify deploy --prod`

### Option 3: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

## Form Submission Setup

The contact form currently uses a placeholder submission handler. To enable actual form submissions:

### Option 1: Email Service (SendGrid, Mailgun, etc.)

1. Install email service SDK
2. Create API route: `app/api/contact/route.ts`
3. Update form in `components/Contact.tsx` to POST to `/api/contact`

### Option 2: Form Service (Formspree, Netlify Forms, etc.)

1. Sign up for form service
2. Update form action URL in `components/Contact.tsx`

### Option 3: Custom Backend

1. Create API endpoint
2. Update form submission handler in `components/Contact.tsx`

## Customization

### Adding Brand Logos

1. Add logo images to `public/logos/` directory
2. Update `components/Portfolio.tsx` to use Next.js Image component:

```tsx
import Image from 'next/image';

// In brand card:
<Image 
  src="/logos/mrassistant-logo.png" 
  alt="mrassistant.ai logo"
  width={64}
  height={64}
/>
```

### Updating Colors

Modify Tailwind classes in components or create a custom theme in `tailwind.config.js`.

### Adding Analytics

1. Install analytics package (e.g., `@vercel/analytics`)
2. Add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Performance Optimization

- Images: Use Next.js Image component for optimized images
- Fonts: Already optimized with next/font
- Code splitting: Automatic with Next.js
- Caching: Configure in deployment platform

## SEO Checklist

- [x] Meta titles and descriptions added
- [x] Open Graph tags configured
- [x] Semantic HTML structure
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Add structured data (JSON-LD)
- [ ] Verify with Google Search Console

## Support

For deployment issues, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- Contact: hello@velantec.com

