# Deploy VELANTEC Website to Vercel

Vercel is the easiest way to deploy your Next.js site. Since your code is already on GitHub, deployment is just a few clicks!

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Sign up / Log in to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** to connect your GitHub account

### Step 2: Import Your Repository

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **`velantecc-prog/velantec-site`**
4. Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect Next.js settings. You can:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Important**: Since we configured static export for Hostinger, you have two options:

#### Option A: Keep Static Export (Simpler)
- Leave settings as-is
- Vercel will build and deploy the static site
- Works perfectly for your site

#### Option B: Use Full Next.js (Better Performance)
- Remove `output: 'export'` from `next.config.ts` temporarily
- Vercel will use Next.js server features
- Better for future API routes if needed

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://velantec-site.vercel.app`
4. You can add a custom domain later

### Step 5: Custom Domain (Optional)

1. Go to your project settings
2. Click **"Domains"**
3. Add your domain (e.g., `velantec.com`)
4. Follow DNS configuration instructions

## Option 2: Deploy via Vercel CLI

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login and Deploy

```bash
cd /Users/arulv97/velantec-website

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Configuration for Vercel

### Current Setup (Static Export)

Your `next.config.ts` is set for static export, which works great on Vercel:

```typescript
output: 'export',
images: {
  unoptimized: true,
},
trailingSlash: true,
```

### For Full Next.js Features (Optional)

If you want to use Next.js server features on Vercel, update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for full Next.js features
  images: {
    unoptimized: false, // Enable image optimization
  },
};

export default nextConfig;
```

## Automatic Deployments

Once connected to GitHub, Vercel will:
- ✅ Automatically deploy on every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show build logs and deployment status

## Environment Variables (If Needed)

If you add environment variables later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Performance Features

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization (if not using static export)
- ✅ Edge functions
- ✅ Analytics (optional)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### 404 Errors on Routes
- If using static export, ensure `.htaccess` routing isn't needed
- Vercel handles routing automatically for Next.js

### Images Not Loading
- If using static export, images work as-is
- If using full Next.js, enable image optimization

## Quick Deploy Link

Once you connect your GitHub repo, you can deploy directly:
https://vercel.com/new

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs

