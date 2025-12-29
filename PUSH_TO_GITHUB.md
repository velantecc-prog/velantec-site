# Push to GitHub - Authentication Required

Your code is committed and ready to push! You just need to authenticate with GitHub.

## Quick Solution: Use Personal Access Token

### Step 1: Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `velantec-site-push`
4. Select scope: ✅ **`repo`** (Full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Push Using the Token

Run this command:

```bash
cd /Users/arulv97/velantec-website
git push -u origin main
```

When prompted:
- **Username**: `velantecc-prog` (or your GitHub username)
- **Password**: Paste your Personal Access Token (not your GitHub password)

## Alternative: Use GitHub CLI

If you have GitHub CLI installed:

```bash
gh auth login
git push -u origin main
```

## Alternative: Update Git Credentials

Clear old credentials and use new ones:

```bash
# Clear cached credentials
git credential-osxkeychain erase
host=github.com
protocol=https

# Then push (it will ask for credentials)
git push -u origin main
```

## Verify Push

After successful push, visit:
https://github.com/velantecc-prog/velantec-site

You should see all your files there!

## Future Pushes

After the first push, you can simply use:
```bash
git push
```

