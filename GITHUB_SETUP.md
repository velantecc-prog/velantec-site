# Push to GitHub - Quick Guide

## Option 1: If you already have a GitHub repository

Run these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
cd /Users/arulv97/velantec-website

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Option 2: Create a new GitHub repository

1. **Go to GitHub.com** and log in
2. **Click the "+" icon** → **New repository**
3. **Repository name**: `velantec-website` (or any name you prefer)
4. **Description**: "VELANTEC corporate parent company website"
5. **Visibility**: Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

Then run:

```bash
cd /Users/arulv97/velantec-website

# Add the remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## If you get authentication errors:

### For HTTPS:
- GitHub may ask for a Personal Access Token instead of password
- Create one at: https://github.com/settings/tokens
- Select scope: `repo` (full control of private repositories)

### For SSH:
- Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Quick Commands Reference

```bash
# Check current remote
git remote -v

# Change remote URL (if needed)
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push changes
git push origin main

# Pull changes (if working from multiple places)
git pull origin main
```

