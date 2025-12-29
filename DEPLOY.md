# Quick Deployment Guide for Hostinger

## Quick Steps

### 1. Build the Static Site

```bash
npm run build
```

This creates an `out` folder with all static files.

### 2. Upload to Hostinger

**Using File Manager:**
1. Log in to Hostinger hPanel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html`
4. Delete existing files (backup first if needed)
5. Upload ALL contents from the `out` folder to `public_html`

**Using FTP:**
1. Connect via FileZilla using FTP credentials from Hostinger
2. Upload all files from `out` folder to `public_html` directory

### 3. Add .htaccess File

Copy the `.htaccess` file from `public/.htaccess` to `public_html` on your server.

Or create it directly in Hostinger File Manager with the content from `public/.htaccess`.

### 4. Test Your Site

Visit your domain - it should work!

## Important Notes

- ✅ Site is configured for static export (no Node.js needed)
- ✅ All files go in `public_html` folder
- ✅ `.htaccess` handles routing for Next.js
- ⚠️ Contact form needs external service (Formspree, EmailJS, etc.)

## Updating the Site

1. Make changes
2. Run `npm run build`
3. Upload new files from `out` folder
4. Done!

## Need Help?

See `HOSTINGER_DEPLOYMENT.md` for detailed instructions.

