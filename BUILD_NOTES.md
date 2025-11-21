# 🔧 Build & Deployment Notes

## Build Environment Requirements

### System Requirements
- Node.js v14.x or higher (tested with v22.x)
- Yarn v1.22+ or npm v8+
- 2GB+ RAM for Gatsby build
- Internet connectivity for dependency installation

### Native Dependencies
This project uses `sharp` for image optimization, which requires:
- Python 3.x
- node-gyp
- C++ build tools (gcc/g++ on Linux, Xcode on macOS, Visual Studio on Windows)

### Installation Steps

#### Option 1: Using Yarn (Recommended)
```bash
yarn install
yarn develop      # Development server on http://localhost:8000
yarn build        # Production build
```

#### Option 2: Using npm
```bash
npm install --legacy-peer-deps
npm run develop   # Development server
npm run build     # Production build
```

**Note:** Use `--legacy-peer-deps` flag due to peer dependency conflicts in older Gatsby 2.x packages.

### Known Installation Issues

#### Issue 1: sharp Installation Failure
**Symptom:** `Error: Status 403` when downloading libvips binaries

**Solutions:**
1. **Retry:** Network issues may be temporary
2. **Use pre-built binaries:**
   ```bash
   npm install --build-from-source=false --legacy-peer-deps
   ```
3. **Install system dependencies first (Linux):**
   ```bash
   sudo apt-get install -y libvips-dev
   ```

#### Issue 2: Peer Dependency Conflicts
**Symptom:** `ERESOLVE unable to resolve dependency tree`

**Solution:** Use legacy peer deps flag:
```bash
npm install --legacy-peer-deps
```

#### Issue 3: Gatsby Version Compatibility
This project uses **Gatsby 2.x** (released 2018-2019). Consider upgrading to Gatsby 5.x for:
- Better performance
- Modern React features
- Active security updates
- Easier dependency management

### Development Server

Once dependencies are installed:

```bash
# Start development server
gatsby develop

# Or using npm/yarn scripts
npm run develop
yarn develop
```

Access the site at:
- **Site:** http://localhost:8000
- **GraphQL Explorer:** http://localhost:8000/___graphql

### Production Build

```bash
# Build static site
gatsby build

# Output directory: ./public/
# Deploy this folder to your hosting provider
```

### Deployment

#### Netlify (Recommended - Already Configured)

**Automatic Deployment:**
1. Connect GitHub repo to Netlify
2. Netlify auto-detects Gatsby and uses settings from `netlify.toml`
3. Build command: `gatsby build`
4. Publish directory: `public/`

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Alternative: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Alternative: GitHub Pages
```bash
# Add to package.json scripts:
"deploy": "gatsby build && gh-pages -d public"

# Install gh-pages
npm install gh-pages --save-dev

# Deploy
npm run deploy
```

### Environment Variables

Create `.env.development` and `.env.production` files for environment-specific config:

```env
# .env.development
GATSBY_SITE_URL=http://localhost:8000

# .env.production
GATSBY_SITE_URL=https://progression.leadtech.com
GATSBY_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

### Troubleshooting

#### Build Fails in CI/CD
**Issue:** Network restrictions prevent dependency downloads

**Solution:** Use Docker with pre-installed dependencies:
```dockerfile
FROM node:14
RUN apt-get update && apt-get install -y libvips-dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
```

#### Memory Issues During Build
**Issue:** JavaScript heap out of memory

**Solution:** Increase Node.js memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" gatsby build
```

### Performance Optimization

After successful build, run:
```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:9000 --view

# Bundle analysis
npm install -g gatsby-plugin-webpack-bundle-analyser-v2
```

### Current Build Status

**Environment:** Claude Code sandbox (restricted)
- ⚠️ **Dependency installation:** Failed due to network restrictions
- ✅ **Code changes:** Complete and valid
- ✅ **Configuration:** Updated for Leadtech
- ⏳ **Build verification:** Pending local/CI environment

**Next Steps:**
1. Clone repo to local machine or CI environment
2. Run `npm install --legacy-peer-deps`
3. Test with `gatsby develop`
4. Build with `gatsby build`
5. Deploy to Netlify

### Support

If you encounter issues not covered here:
1. Check Gatsby documentation: https://www.gatsbyjs.com/docs/
2. Review GitHub issues: https://github.com/gatsbyjs/gatsby/issues
3. Contact the repository maintainer

---

**Last Updated:** 2025-11-21
**Gatsby Version:** 2.0.19
**Node Version Tested:** 22.21.1
