# Portfolio Project - Current State Documentation

**Generated:** 2025-11-07
**Status:** Mid-Refactor

## Project Overview

React 18 + TypeScript portfolio site built with Vite, using Tailwind CSS for styling and React Router for navigation. Data-driven content from JSON files converted from CSV sources.

---

## Technology Stack

- **Framework:** React 18.3.1 + TypeScript 5.6.2
- **Build Tool:** Vite 7.1.10
- **Router:** React Router DOM 6.26.2
- **Styling:** Tailwind CSS 3.4.13 with custom fluid typography plugin
- **SEO:** react-helmet-async
- **Icons:** Heroicons & Lucide React

---

## Site Map (Current vs. Goal)

### Current Pages (3/6)
1. ✅ **Home** (`/`) - Up-to-date
2. ✅ **About** (`/about`) - Up-to-date
3. 🟡 **Works** (`/works`) - Structure exists, needs data integration

### Goal Pages (To Be Created)
4. ⚪ **Writing** (`/writing`) - Will consume Bluesky PDS content
5. ⚪ **Links** (`/links`) - Personal linktree style page
6. ⚪ **Contact** (`/contact`) - Contact page

---

## Component Organization

### Current Structure
27 component directories with mixed organization patterns (mid-refactor)

### Target Component Structure (4-File System)
```
/ComponentName/
├── ComponentName.tsx         # Component implementation
├── ComponentName.types.ts    # TypeScript interfaces
├── ComponentName.styles.ts   # Tailwind class objects
└── ComponentName.constants.ts # Constants & config
```

### Components Following Pattern (3-file only, NO constants yet)
- ✅ Heading, Button, Link, Paragraph, Banner, Artwork, Divider
- ✅ Section (with theme context provider)
- ✅ PostCarousel, Skills, Tags, Events, Facts, Timeline

### Components Needing Refactor
- Card variants (multiple files in one folder)
- Navigation components (BackButton, ThemeToggle)
- Footer, Logo, Breadcrumb (single files)
- Section/Home/* components (old pattern)
- home/* components (incomplete)

---

## Data Management

### Protected Data Files (`src/data/`)

**JSON Files** (`src/data/json/`):
- `articles.json` - 8.8 KB - Publication data
- `casestudies.json` - 14.3 KB - Portfolio projects (16 items)
- `companies.json` - 6.3 KB - Client information
- `content.json` - 68.9 KB - Combined dataset
- `jobs.json` - 17.2 KB - Employment history
- `skills.json` - 4.1 KB - Professional skills

**CSV Source Files** (`src/data/csv/`):
Expected format: "Barry Prendergast - [Type].csv"
- Companies, Skills, Portfolio, Jobs, Articles

**Data Access Layer** (`src/lib/data/getData.ts`):
```typescript
getContent()              // All data combined
getArticles()            // Article[]
getCaseStudies()         // CaseStudy[]
getCompanies()           // Company[]
getJobs()                // Job[]
getSkills()              // Skill[]
getItemBySlug()          // Generic lookup
getFeaturedArticles()    // Filtered
getLatestCaseStudies()   // Sorted & limited
```

**Conversion Script:**
```bash
npm run convert-content  # Runs src/scripts/convertCsvToJson.ts
```

---

## Design System

### Color Palette

**Primary Colors** (from `tailwind.config.ts`):
- **Blue:** `#0000ff` (bones-blue) - Primary background
- **White:** `#ffffff` (bones-white) - Text & borders
- **Black:** `#000000` (bones-black) - Future text color
- **Yellow:** `bones-yellow` - Focus, highlights, text selection

**Neutral Palette:**
- bones-dimgray (#282828), bones-gainsboro (#DCDCDC)
- bones-gray (#808080), bones-ghostwhite (#F8F8FF)
- bones-linen (#FAF0E6), bones-floralwhite (#FFFAF0)

**Accent Colors:**
- Yellows: bones-gold, bones-goldenrod
- Blues: bones-aliceblue, bones-mediumblue, bones-midnightblue
- Reds: bones-red, bones-firebrick, bones-darkred
- Purples: bones-magenta, bones-rebeccapurple, bones-indigo

### Typography

**Fonts:**
- **Sans:** DM Sans - Body text
- **Serif:** DM Serif Display - Display text

**Fluid Type Plugin** (Custom Tailwind):
```css
/* Responsive scaling with clamp() */
.fluid-preset-h1  /* 28px → 88px (360px → 1200px viewport) */
.fluid-preset-h2  /* 22px → 48px */
.fluid-preset-h3  /* 18px → 32px */
.fluid-preset-body /* 16px → 18px */
```

### Layout Principles

**Requirements:**
- ✅ Use CSS Grid and Flexbox appropriately
- ✅ NO margin - use padding and gap only
- ✅ Scale text between breakpoints
- ✅ Apply line-height to every text element
- ✅ Tailwind utilities everywhere

---

## Current Styling Implementation

### Pattern 1: White borders on blue background
Used in: HomePage, AboutPage
- Background: `#0000ff`
- Text: White
- Borders: White `#ffffff`
- Links/Buttons: Various scales

### Pattern 2: White background (future)
- Background: White `#ffffff`
- Text: Black `#000000`
- Links: Blue `#0000ff`

### Theme System
Section component provides theme context:
- `mono`, `gray`, `yellow`, `blue`, `red`, `purple`
- Child components (Button, Heading, etc.) are theme-aware

---

## Git Workflow

**Current Branch:** `main`
**Status:** Clean working directory

**Branching Strategy:**
- ⚠️ **NEVER push to main without explicit approval**
- Create feature branches for all work
- Merge only when approved

**Recent Commits:**
```
47c702b Merge pull request #10
f241a4e update to prepare to merge
3fd813f GitButler Workspace Commit
9ae9db4 Merge pull request #9
```

---

## Immediate Tasks

### 1. ✅ Project Documentation (this file)

### 2. Component Organization
- Split multi-component folders into individual component folders
- Add missing `.constants.ts` files where needed
- Standardize all components to 4-file system

### 3. Data Protection
- Verify `src/data/` structure integrity
- Document data dependencies
- Ensure conversion scripts work correctly

### 4. Styling Audit
- Review styling consistency across components
- Ensure no margin usage
- Verify fluid typography implementation

### 5. Page Development
- Fix WorksPage data integration
- Create Writing page (Bluesky integration)
- Create Links page
- Create Contact page

---

## Key File Locations

```
portfolio/
├── src/
│   ├── components/          # 27 component directories
│   ├── pages/              # HomePage, AboutPage, WorksPage
│   ├── data/
│   │   ├── json/          # Data files (protected)
│   │   └── csv/           # Source CSV files
│   ├── lib/
│   │   ├── data/          # getData.ts - data access layer
│   │   └── utils.ts       # cn() utility
│   ├── scripts/           # convertCsvToJson.ts
│   ├── types/             # TypeScript definitions
│   └── main.tsx           # Entry point with routing
├── plugins/               # fluidType.ts - custom Tailwind plugin
├── tailwind.config.ts     # Design system configuration
└── vite.config.ts         # Build configuration
```

---

## Notes

- **SEO:** All pages use Helmet with JSON-LD structured data
- **Routing:** Smart Link component handles internal/external URLs
- **Dark Mode:** Enabled via `next-themes` (class-based)
- **Icons:** Both @heroicons and lucide-react available
- **Code Quality:** ESLint + Prettier configured
- **No State Management:** Simple JSON data loading, no Redux/Zustand needed
