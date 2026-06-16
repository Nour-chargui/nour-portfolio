# Nour CHARGUI Portfolio | Deployment Guide

## Step 1: Push Your Code to GitHub (or GitLab/Bitbucket)
1. Create a new repository on GitHub (make it public or private, doesn't matter!)
2. Open your terminal/command prompt
3. Initialize git, commit, and push your changes:
```bash
cd C:\Users\user\Desktop\Nour_Portfolio
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy to Vercel (EASIEST WAY!)
Vercel is **free** and deploy your Next.js app in seconds!

### Method 1: Vercel Dashboard (Recommended)
1. Go to [https://vercel.com](https://vercel.com) and sign up/login with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. Find your repository and click **"Import"**
4. Leave all default settings, click **"Deploy"**
5. Wait 1-2 minutes, and you'll get a live URL like `your-portfolio.vercel.app`!

### Method 2: Vercel CLI (For Techies!)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in your project folder and follow the prompts

## Step 3: Custom Domain (Optional!)
If you own a domain, Vercel makes it super easy to connect it!

## Done! 🎉
Your portfolio is live and cyberpunk-themed! Perfect for impressing recruiters!
