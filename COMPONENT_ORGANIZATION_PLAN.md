# Component Organization Plan

**Branch:** `feature/organize-components`
**Date:** 2025-11-07

## Goal

Standardize all components in `src/components/` to follow the 4-file system:

```
/ComponentName/
├── ComponentName.tsx         # Component implementation
├── ComponentName.types.ts    # TypeScript interfaces
├── ComponentName.styles.ts   # Tailwind class objects
└── ComponentName.constants.ts # Constants & configuration
```

---

## Current State Analysis

### ✅ Components Following 3-File Pattern (Need .constants.ts)

These components are well-structured but missing the constants file:

1. **Heading** - Typography component
2. **Button** - Theme-aware button
3. **Link** - Smart internal/external link handler
4. **Paragraph** - Text component with variants
5. **Banner** - Notification banner
6. **Artwork** - Image/media component
7. **Divider** - Visual separator
8. **PostCarousel** - Post carousel
9. **Section** - Container with theme provider
10. **Skills** & **Skill** - Skill display
11. **Tags** & **Tag** - Tag display
12. **Events** & **Event** - Event cards
13. **Facts** & **Fact** - Fact cards
14. **Timeline** - Timeline component

**Action:** Add `.constants.ts` files where applicable (only if component has hardcoded values that should be extracted)

---

### 🔄 Multi-Component Folders (Need Splitting)

#### Card Folder
Currently contains 4 separate components in one folder:

```
Card/
├── Card.tsx              # Base card component
├── CardArticle.tsx       # Article variant
├── CardRole.tsx          # Role variant
├── CardStudy.tsx         # Case study variant
├── types.ts              # Shared types
└── index.ts              # Exports
```

**Issue:** CardArticle, CardRole, and CardStudy are separate components that happen to use the base Card component. They should be in their own folders.

**Action:**
1. Keep `Card/` folder with base Card component following 4-file system
2. Create `CardArticle/` folder with 4-file system
3. Create `CardRole/` folder with 4-file system
4. Create `CardStudy/` folder with 4-file system

---

### 🔄 Navigation Folder
Contains 3 independent components:

```
Navigation/
├── BackButton.tsx        # Back navigation button
├── ThemeToggle.tsx       # Dark mode toggle
└── index.tsx             # Exports
```

**Issue:** These are separate components, not variants. Should be split into individual folders.

**Action:**
1. Create `BackButton/` folder with 4-file system
2. Create `ThemeToggle/` folder with 4-file system
3. Remove Navigation folder (or repurpose as a compound component if needed later)

---

### 🔄 Single-File Components (Need Full Structure)

These components exist as single files and need the full 4-file structure:

1. **Logo** (`Logo/Logo.tsx` + `Logo.styles.ts`)
   - Has styles file, needs types and constants

2. **Breadcrumb** (`Breadcrumb/Breadcrumb.tsx`)
   - Single file, needs full structure

3. **Footer** (`Footer/index.tsx`)
   - Single file, needs full structure

4. **TLDRProfile** (`About/TLDRProfile.tsx`)
   - Single file in About folder, needs own folder with 4-file system

5. **TopBar** (`Layout/TopBar.tsx`)
   - Single file in Layout folder, needs own folder with 4-file system

---

### ⚠️ Legacy/Unrefactored Components

These need evaluation before refactoring:

#### Section/Home/* Components
```
Section/Home/
├── Hero.tsx
├── Work.tsx
├── History.tsx
├── Skills.tsx
└── About.tsx
```

**Status:** These use the refactored Section component. Need to verify if they're still in use or if they've been replaced by the new HomePage/AboutPage structure.

**Action:** Investigate usage, then either refactor or remove.

#### home/* Components
```
home/
├── ArticlesSection.tsx      # Incomplete
├── CaseStudiesSection.tsx   # Incomplete
├── HeroSection.tsx          # Old hero (duplicate?)
├── LoadingStates.tsx        # Utilities
└── grids/
    ├── ArticlesGrid.tsx
    └── CaseStudiesGrid.tsx
```

**Status:** Marked as incomplete/unrefactored. May be deprecated.

**Action:** Verify usage, then either complete refactor or remove.

#### ui/* Components
```
ui/
├── AnimatedWrapper.tsx
├── Badge.tsx
├── Button.tsx             # Duplicate of main Button?
├── Card.tsx               # Duplicate of main Card?
├── Container.tsx
├── Heading.tsx            # Duplicate of main Heading?
├── LoadingSpinner.tsx
├── Motion.tsx
├── Text.tsx
└── index.ts
```

**Status:** Old UI library pattern. Duplicates exist in main components folder.

**Action:** Audit for duplicates, migrate any unique components, remove folder.

---

## Implementation Order

### Phase 1: Split Multi-Component Folders (Priority: High)
1. Split Card variants (CardArticle, CardRole, CardStudy)
2. Split Navigation components (BackButton, ThemeToggle)
3. Update imports across the codebase

### Phase 2: Convert Single-File Components (Priority: High)
1. Logo - Add types and constants
2. Breadcrumb - Add full 4-file structure
3. Footer - Add full 4-file structure
4. TLDRProfile - Create new folder with 4-file structure
5. TopBar - Create new folder with 4-file structure

### Phase 3: Add Constants Files (Priority: Medium)
- Review all 3-file components
- Add `.constants.ts` only where hardcoded values exist
- Extract magic numbers, strings, configs

### Phase 4: Cleanup Legacy Code (Priority: Medium)
1. Audit Section/Home/* components
2. Audit home/* components
3. Audit ui/* folder for duplicates
4. Remove or refactor as appropriate

### Phase 5: Update Documentation (Priority: Low)
- Update PROJECT_STATE.md
- Create component README.md files where helpful
- Document component usage patterns

---

## Validation Checklist

After refactoring, verify:

- [ ] All imports updated and working
- [ ] No circular dependencies
- [ ] TypeScript compiles without errors
- [ ] All pages render correctly (HomePage, AboutPage, WorksPage)
- [ ] No console errors or warnings
- [ ] Build succeeds (`npm run build`)
- [ ] Git status clean (all changes committed)

---

## Breaking Changes

**Import Path Changes:**

```typescript
// Before
import { CardArticle } from '@/components/Card/CardArticle';
import { BackButton } from '@/components/Navigation/BackButton';

// After
import { CardArticle } from '@/components/CardArticle/CardArticle';
import { BackButton } from '@/components/BackButton/BackButton';
```

**Files to Update:**
- Search for imports from Card/, Navigation/, and other refactored folders
- Update all import statements
- Verify no barrel exports (index.ts) are broken

---

## Rollback Plan

If issues arise:
1. `git checkout main` - Return to main branch
2. `git branch -D feature/organize-components` - Delete feature branch
3. Restart with more granular commits

---

## Notes

- Keep commits small and focused
- Test after each major change
- Don't refactor and change functionality simultaneously
- Preserve existing component behavior exactly
- Document any assumptions or decisions made
