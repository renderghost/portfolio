# Component Architecture

This directory contains all React components for the portfolio site, organized using a consistent 4-file system.

---

## Component File Structure

Every component follows this standardized structure:

```
/ComponentName/
├── ComponentName.tsx          # React component implementation
├── ComponentName.types.ts     # TypeScript interfaces and types
├── ComponentName.styles.ts    # Tailwind CSS class strings and style objects
└── ComponentName.constants.ts # Configuration values, hardcoded data, constants
```

### File Responsibilities

#### 1. `ComponentName.tsx` - Implementation
- Contains the React component logic and JSX
- Imports from sibling files (types, styles, constants)
- Handles state, effects, and event handlers
- Should be relatively clean and readable

**Example:**
```typescript
import * as styles from './Button.styles';
import { DEFAULT_VARIANT } from './Button.constants';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = DEFAULT_VARIANT,
  children
}) => {
  return (
    <button className={styles.getButtonStyles(variant)}>
      {children}
    </button>
  );
};
```

#### 2. `ComponentName.types.ts` - Type Definitions
- All TypeScript interfaces and types for the component
- Props interfaces
- Internal type definitions
- Exported for use by parent components

**Example:**
```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonState {
  isPressed: boolean;
}
```

#### 3. `ComponentName.styles.ts` - Styling
- Tailwind CSS class strings
- Style utility functions
- Dynamic style generators (for variants, states, etc.)
- Uses `cn()` utility for class merging when needed

**Example:**
```typescript
import { cn } from '@/lib/utils';

export const button = 'px-4 py-2 rounded font-medium transition-colors';

export const getButtonStyles = (variant: 'primary' | 'secondary') =>
  cn(
    button,
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  );
```

#### 4. `ComponentName.constants.ts` - Configuration
- Hardcoded values (strings, numbers, URLs)
- Configuration objects and arrays
- Default values
- Data that might change but shouldn't be in the component

**Example:**
```typescript
export const DEFAULT_VARIANT = 'primary' as const;

export const ANIMATION_DURATION = 300;

export const SOCIAL_LINKS = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
] as const;
```

---

## Component Patterns

### 1. Simple Components (3-File System)
Some components don't have hardcoded values to extract and only need 3 files:
- `ComponentName.tsx`
- `ComponentName.types.ts`
- `ComponentName.styles.ts`

Examples: Heading, Paragraph, Divider, Banner

### 2. Composite Components
Components that render other components together:

**Example: Navigation**
```typescript
// Navigation renders Logo, nav links, and ThemeToggle
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { NAV_LINKS } from './Navigation.constants';
```

### 3. Base + Variant Pattern
A base component that's wrapped by specialized variants:

**Base Component:** `Card/`
- Handles visual layout, styling, structure
- Accepts generic props (title, description, image, etc.)

**Variant Components:** `CardArticle/`, `CardRole/`, `CardStudy/`
- Accept domain-specific data (article object, role object, etc.)
- Transform data into Card's expected format
- Wrap the base Card component
- Add variant-specific behavior (links, routing, etc.)

**Example:**
```typescript
// CardArticle.tsx - Variant that uses base Card
import { Card } from '@/components/Card/Card';

export const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  return (
    <a href={article.articleUrl}>
      <Card
        coverImage={article.coverImage}
        title={article.title}
        description={article.subtitle}
      />
    </a>
  );
};
```

### 4. Context-Aware Components
Components that read from React Context:

**Example: Button with SectionContext**
```typescript
// Button reads theme from Section's context
import { useSectionContext } from '../Section/SectionContext';

export const Button: React.FC<ButtonProps> = ({ children }) => {
  const { theme } = useSectionContext();
  return <button className={styles.getButtonStyles(theme)}>{children}</button>;
};
```

---

## Styling Principles

### 1. Use Tailwind Utilities
- All styling uses Tailwind CSS utility classes
- No inline styles or CSS modules
- Style strings exported from `.styles.ts` files

### 2. No Margin, Use Padding & Gap
- **Never use margin** classes (mt-, mb-, mx-, etc.)
- Use **padding** for internal spacing
- Use **gap** for flex/grid child spacing
- Use **space-x-** / **space-y-** for consistent child spacing

**Good:**
```typescript
export const container = 'flex flex-col gap-4 p-6';
export const grid = 'grid grid-cols-3 gap-8 p-12';
```

**Bad:**
```typescript
export const container = 'flex flex-col mt-4 mb-8 mx-6'; // ❌ No margins!
```

### 3. Responsive Typography
- Always apply **line-height** to text elements
- Use **fluid typography** where appropriate
- Scale text between breakpoints with responsive classes

**Example:**
```typescript
export const heading = 'text-4xl md:text-6xl font-medium leading-tight';
export const body = 'text-base md:text-lg leading-relaxed';
```

### 4. Dynamic Styles with Functions
For variant-based or conditional styling:

```typescript
export const getCardStyles = (onClick?: () => void, className?: string) =>
  cn(
    'rounded-lg transition-all',
    onClick && 'cursor-pointer hover:shadow-lg',
    className
  );
```

---

## Component Relationships

### Layout Hierarchy
```
App
├── Navigation (main nav bar)
├── Pages (HomePage, AboutPage, WorksPage)
│   ├── TLDRProfile (sidebar on AboutPage)
│   ├── Section (theme wrapper)
│   │   ├── Heading, Paragraph, Button (theme-aware)
│   ├── CardArticle, CardRole, CardStudy (use base Card)
├── Footer (site footer)
```

### Component Dependencies
- **Section** provides theme context to children
- **Card** is the base for CardArticle, CardRole, CardStudy
- **Link** is used throughout for internal/external navigation
- **Heading**, **Paragraph** used for typography
- **Button** used for interactions

---

## Creating New Components

### Step 1: Create Component Folder
```bash
mkdir src/components/NewComponent
```

### Step 2: Create 4 Files
```bash
touch src/components/NewComponent/NewComponent.tsx
touch src/components/NewComponent/NewComponent.types.ts
touch src/components/NewComponent/NewComponent.styles.ts
touch src/components/NewComponent/NewComponent.constants.ts
```

### Step 3: Implement Files

**NewComponent.types.ts:**
```typescript
export interface NewComponentProps {
  title: string;
  description?: string;
}
```

**NewComponent.constants.ts:**
```typescript
export const DEFAULT_DESCRIPTION = 'Default description text';
```

**NewComponent.styles.ts:**
```typescript
export const container = 'flex flex-col gap-4 p-6';
export const title = 'text-2xl font-bold leading-tight';
export const description = 'text-base leading-relaxed';
```

**NewComponent.tsx:**
```typescript
import * as styles from './NewComponent.styles';
import { DEFAULT_DESCRIPTION } from './NewComponent.constants';
import { NewComponentProps } from './NewComponent.types';

export const NewComponent: React.FC<NewComponentProps> = ({
  title,
  description = DEFAULT_DESCRIPTION
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
```

### Step 4: Export (Optional)
If needed for external imports, create an index file or export from parent index.

---

## Design System Integration

### Colors
Defined in `tailwind.config.ts` with "bones" prefix:
- `bones-blue` - Primary blue (#0000ff)
- `bones-white` - White (#ffffff)
- `bones-black` - Black (#000000)
- `bones-yellow` - Accent/focus color

### Typography
Two font families:
- **DM Sans** - Body text (`font-sans`)
- **DM Serif Display** - Display text (`font-serif`)

Fluid typography plugin available:
```typescript
className="fluid-preset-h1" // Scales from 28px → 88px
className="fluid-preset-body" // Scales from 16px → 18px
```

### Theme System
Section component provides theme context:
```typescript
<Section theme="blue">
  <Button /> {/* Automatically styled for blue theme */}
  <Heading /> {/* Automatically styled for blue theme */}
</Section>
```

Available themes: `mono`, `gray`, `yellow`, `blue`, `red`, `purple`

---

## Best Practices

### ✅ Do
- Follow the 4-file structure consistently
- Extract magic strings/numbers to constants
- Use TypeScript for all props
- Apply line-height to all text
- Use gap instead of margin
- Keep components focused and single-purpose
- Use semantic HTML elements

### ❌ Don't
- Use inline styles
- Use margin classes
- Put constants directly in JSX
- Create components without types
- Mix styling approaches
- Create barrel exports (index.ts) unless needed
- Duplicate component logic

---

## Examples in Codebase

### Simple Component
**Divider** - Visual separator with minimal logic

### Complex Component
**PostCarousel** - Carousel with state, resize logic, accessibility

### Composition Pattern
**Navigation** - Combines Logo, nav links, and ThemeToggle

### Base + Variant Pattern
**Card** → CardArticle, CardRole, CardStudy

### Context Consumer
**Button** - Reads theme from SectionContext

---

## Questions?

Refer to existing components for examples. Most components follow these patterns closely.

For architecture decisions or new patterns, discuss with the team before implementing.
