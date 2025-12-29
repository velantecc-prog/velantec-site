# Deploying VELANTEC Website to Hostinger Shared Hosting

This guide will help you deploy your Next.js static site to Hostinger shared hosting.

## Prerequisites

1. Hostinger shared hosting account
2. Access to File Manager or FTP client (FileZilla, etc.)
3. Domain name connected to your Hostinger account

## Step 1: Build the Static Site

Since Hostinger shared hosting doesn't support Node.js runtime, we need to export the site as static HTML files.

### Build Command

Run this in your terminal from the project directory:

```bash
npm run build
```

This will create a `out` folder with all the static files ready for deployment.

## Step 2: Prepare Files for Upload

After building, you'll find all static files in the `out` directory. This is what you need to upload to Hostinger.

## Step 3: Upload to Hostinger

### Option A: Using File Manager (Recommended)

1. **Log in to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Open File Manager**
   - Navigate to **Files** → **File Manager**
   - Go to your domain's root directory (usually `public_html`)

3. **Clear existing files** (if any)
   - Select all files in `public_html`
   - Delete them (keep a backup if needed)

4. **Upload files**
   - Click **Upload** button
   - Select all files from the `out` folder
   - Wait for upload to complete

### Option B: Using FTP Client (FileZilla)

1. **Get FTP credentials from Hostinger**
   - Go to **Files** → **FTP Accounts**
   - Note your FTP host, username, and password

2. **Connect with FileZilla**
   - Host: `ftp.yourdomain.com` or IP provided by Hostinger
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload files**
   - Navigate to `public_html` on the server
   - Navigate to `out` folder on your local machine
   - Select all files and drag them to `public_html`
   - Wait for upload to complete

## Step 4: Configure .htaccess (Important!)

Create a `.htaccess` file in the `public_html` directory with the following content:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Handle client-side routing (for Next.js)
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Step 5: Verify Deployment

1. Visit your domain in a browser
2. Check that all pages load correctly:
   - Homepage: `https://yourdomain.com`
   - Portfolio: `https://yourdomain.com/portfolio`
   - About: `https://yourdomain.com/about`
   - Contact: `https://yourdomain.com/contact`

## Step 6: Update Contact Form (Optional)

The contact form currently shows an alert. To make it functional:

1. **Option 1: Use a third-party service**
   - Formspree.io
   - EmailJS
   - FormSubmit

2. **Option 2: Create a PHP handler**
   - Create `contact-handler.php` in `public_html`
   - Update form to POST to this PHP file

## Troubleshooting

### Issue: 404 errors on routes
**Solution**: Make sure `.htaccess` file is uploaded and configured correctly

### Issue: CSS/JS not loading
**Solution**: 
- Check file paths in browser console
- Ensure all files from `out` folder are uploaded
- Clear browser cache

### Issue: Images not displaying
**Solution**: 
- Check image paths are correct
- Ensure images are in the correct folders
- Verify file permissions (should be 644)

### Issue: Slow loading
**Solution**:
- Enable caching in `.htaccess`
- Optimize images before upload
- Consider using a CDN

## Updating the Site

When you make changes:

1. Make changes locally
2. Run `npm run build` again
3. Upload new files from `out` folder to Hostinger
4. Clear browser cache

## Important Notes

- **Static Export Only**: This setup only works for static sites. No server-side features.
- **No API Routes**: API routes won't work with static export
- **No ISR/SSR**: Incremental Static Regeneration and Server-Side Rendering won't work
- **Form Handling**: Contact form needs external service or PHP handler

## Alternative: Use Hostinger VPS (If Needed)

If you need server-side features:
1. Upgrade to Hostinger VPS
2. Install Node.js
3. Deploy using PM2 or similar
4. Use `npm start` instead of static export

## Support

For Hostinger-specific issues, contact Hostinger support.
For deployment issues, check the `out` folder structure matches `public_html` structure.

