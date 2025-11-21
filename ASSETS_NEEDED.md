# 🎨 Assets & Information Needed for Complete Customization

This document outlines the assets and information needed to fully customize the Leadtech Progression Framework.

## ✅ Phase 1: Branding (Completed - Pending Assets)

### 🎨 Visual Assets Needed

| Asset | Current | Where Used | Format | Priority |
|-------|---------|------------|--------|----------|
| **Company Logo/Favicon** | Monzo logo | Browser tab, README header, PWA manifest | PNG (60x60px minimum, 512x512px ideal) | HIGH |
| **Brand Colors** | Monzo blue (#2991cc, #14233c) | Progress bar, theme colors, accent colors | Hex codes | HIGH |

**Files to Update Once Assets Provided:**
1. `src/images/favicon.png` - Replace with Leadtech logo
2. `gatsby-config.js` (lines 24, 34-35) - Update colors:
   - `color: '#2991cc'` (progress bar color)
   - `background_color: '#14233c'` (PWA background)
   - `theme_color: '#14233c'` (PWA theme)

### 🏢 Company Information Needed

| Information | Purpose | Current Status |
|-------------|---------|----------------|
| **Company Website URL** | README links, footer | Using www.leadtech.com (assumed) |
| **Deployment Domain** | Netlify configuration | Not configured yet |
| **GitHub Repository URL** | Already updated | ✅ https://github.com/ItsyMarques/LT_Progression-Framework |
| **Primary Contact Email** | Documentation, support | Using italomoacir.marques@leadtech.com |

### 👥 Team Structure for CODEOWNERS

**Current Status:** All ownership assigned to @ItsyMarques

**Recommended Structure:** Assign framework owners by department

Example structure to provide:
```
Engineering Lead: @username
Design Lead: @username
Product Lead: @username
People/HR Lead: @username
Operations Lead: @username
```

---

## ⏳ Phase 2: Content Strategy (Requires Your Input)

### 📋 Strategic Decisions Needed

#### 1. Role & Framework Inventory

**Current Frameworks (17 total):**
- ✅ Keep / ❌ Remove / 🔄 Modify / ➕ New

| Framework | Current Levels | Decision | Notes |
|-----------|----------------|----------|-------|
| **Engineering** | | | |
| └─ Backend Engineering | 6 | ⬜ | |
| └─ Web Engineering | 6 | ⬜ | |
| └─ Mobile Engineering | 6 | ⬜ | |
| └─ Data Engineering | 6 | ⬜ | |
| └─ Quality Analyst | 6 | ⬜ | |
| **Design** | | | |
| └─ Product Design | 6 | ⬜ | |
| └─ Visual Design | 6 | ⬜ | |
| └─ User Research | 6 | ⬜ | |
| **Product** | | | |
| └─ Product Management | 4 | ⬜ | |
| **People/HR** | | | |
| └─ People Operations | 7 | ⬜ | |
| **Marketing** | | | |
| └─ Marketing | 6 | ⬜ | |
| **Operations** | | | |
| └─ Ops Leadership | 5 | ⬜ | |
| └─ Ops IC | 6 | ⬜ | |
| └─ Customer Operations | 5 | ⬜ | |
| └─ Executive Support | 6 | ⬜ | |
| └─ Technical Operations | 6 | ⬜ | |
| **Generic/Base** | | | |
| └─ Generic Framework | 6 | ⬜ | |

#### 2. Level Structure

**Current:** 6 levels (some frameworks have 4-7)

**Questions:**
- Do you want to standardize to 6 levels across all roles?
- What are your level names? (e.g., Junior, Mid, Senior, Staff, Principal, Distinguished)
- Do levels map to salary bands?

#### 3. Core Competencies (Generic Framework)

**Current Generic Framework has 4 topics:**
1. 💬 Communication
2. 🎯 Impact
3. 🧠 Knowledge
4. 🫱🏽‍🫲🏻 Teamwork

**Questions:**
- Are these the right competencies for Leadtech?
- Should we add/remove/modify any?
- What are Leadtech's core values that should be reflected?

#### 4. Company Values Integration

**Needed:** List of Leadtech's company values to integrate into criteria

Example:
- Innovation
- Customer-First
- Collaboration
- Excellence
- etc.

#### 5. Existing Documentation

**Do you have existing progression documents?**
- ⬜ Job descriptions
- ⬜ Competency matrices
- ⬜ Career ladders
- ⬜ Performance review templates
- ⬜ Values/culture docs

If yes, please provide so I can migrate content.

---

## 🔧 Phase 3: Technical Configuration

### Deployment Configuration

**Netlify Setup:**
- [ ] Domain name (e.g., progression.leadtech.com)
- [ ] DNS configuration access
- [ ] Netlify account connected to GitHub repo

**Alternative Hosting:**
- [ ] AWS S3 + CloudFront
- [ ] Vercel
- [ ] GitHub Pages
- [ ] Other: ________________

### Analytics (Optional)

**Current:** Google Analytics references in code

**Questions:**
- Should we set up analytics tracking?
- What analytics platform? (GA4, Mixpanel, etc.)
- Tracking ID to use

---

## 📝 Phase 4: Content Customization

### Framework-Specific Information Needed

For **each framework you want to keep**, provide:

#### Engineering Roles
- **Tech stack:** What languages, frameworks, tools do you use?
- **Processes:** Code review practices, deployment process, on-call?
- **Team structure:** Squad-based? Team size?

#### Design Roles
- **Design tools:** Figma? Adobe? Sketch?
- **Design process:** Design sprints? User testing cadence?
- **Deliverables:** What do designers produce?

#### Product Roles
- **PM responsibilities:** Roadmap? Analytics? Stakeholder management?
- **Product process:** Agile? Scrum? Kanban?
- **Success metrics:** How do you measure PM performance?

#### Operations Roles
- **Ops scope:** What does operations cover at Leadtech?
- **Tools/systems:** What do ops teams use?
- **Support model:** Ticket system? SLAs?

#### People/HR
- **HR team structure:** Recruiting? L&D? People Ops?
- **HR processes:** Performance reviews? Onboarding?
- **Compliance:** Any legal/geographic considerations?

---

## 🚀 Quick Start: Minimum Viable Assets

**To get a functioning, branded site ASAP, provide:**

1. **Logo** (PNG, 512x512px)
2. **2 Brand Colors** (Primary hex code, Secondary hex code)
3. **Deployment Domain** (e.g., progression.leadtech.com)
4. **Top 5 Priority Frameworks** (Which roles are most important to customize first?)

Everything else can be iteratively improved!

---

## 📦 How to Provide Assets

### Option 1: Direct File Upload
Reply with attachments or links to:
- Logo files
- Existing documentation (PDFs, Google Docs, etc.)

### Option 2: Cloud Storage
Share a link to:
- Google Drive folder
- Dropbox folder
- Internal file storage

### Option 3: Structured Response
Copy this template and fill it in:

```
# LEADTECH ASSETS

## Visual Assets
- Logo: [attach or link]
- Primary Color: #______
- Secondary Color: #______

## Company Info
- Website: https://____________
- Deployment Domain: ____________
- Contact Email: ____________

## Team Structure
- Engineering Lead: @____________
- Design Lead: @____________
- Product Lead: @____________

## Priority Frameworks (Top 5)
1. ____________
2. ____________
3. ____________
4. ____________
5. ____________

## Level Structure
- Level 1: ____________
- Level 2: ____________
- Level 3: ____________
- Level 4: ____________
- Level 5: ____________
- Level 6: ____________

## Core Values
1. ____________
2. ____________
3. ____________
```

---

## 📞 Questions?

If anything is unclear or you need help gathering this information, just ask!

**Current Status:** ✅ Phase 1 code changes complete, awaiting assets for deployment.
