# Development Guide

## THE GOLDEN RULE

**The goal is production-quality code, not a prototype**. Every change should be something you'd be confident shipping. Quality over speed. Completeness over convenience.

---

## Instructions for Claude

### Issue Tracking
Use GitHub Issues via the `gh` CLI for all task tracking:
- **NEVER** use markdown files for to-do lists or tracking work
- **ALWAYS** create issues for bugs and features before starting work
- Reference issue numbers in commits and PRs

### Git Workflow
- **NEVER** commit without explicit user instruction
- **NEVER** push without explicit user instruction
- **NEVER** use `--force` or destructive git commands
- You may run `git status`, `git diff`, `git log` freely
- You may stage files with `git add` when explicitly asked
- Leave version control decisions to the user

### Available MCPs

**Figma (`figma-desktop`)** — use this whenever making UI decisions, building components, or verifying layouts. Don't guess at design intent when the Figma file is queryable.
- `get_design_context` — inspect component structure, layout, and constraints
- `get_screenshot` — visual reference for a specific frame or component
- `get_variable_defs` — retrieve design tokens (colours, spacing, typography)
- `get_metadata` — file and component metadata

The Figma file is: [renderg.host portfolio](https://www.figma.com/design/TucBQ75pTnYdNHaoOkn1Dr/renderg.host-portfolio)

### Core Principles
**1. No Stubs, No Shortcuts**
- **NEVER** use placeholder implementations or `// TODO` comments
- **NEVER** skip functionality because it seems complex
- **NEVER** leave incomplete code paths
- Every function must be fully implemented and working

**2. Complete Before Moving On**
- Finish the current task before starting another
- If blocked, discuss with the user rather than working around it
- Each increment of work must be complete and functional

**3. Verify Your Work**
- Run `npm run lint` after changes
- Test locally with `npm run dev`
- Check the browser - don't assume it works

---

## Tech Stack

- **Framework**: Vite + React (SPA) + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS (no inline styles)
- **Data**: AT Protocol PDS (read-only) — fetched directly via HTTP API, no SDK
  - `useRecords` — generic hook for any AT Protocol collection
  - `useLeaflet` — fetches `pub.leaflet.*` records (writing/blog posts)
  - `useProtopro` — fetches `blue.protopro.actor.profile` (career/resume)

---

## Project Structure

```
src/
├── pages/            # Top-level route components (one per page)
├── components/       # React components (strict 4-file structure)
├── hooks/
│   ├── atproto/      # Data-fetching hooks (useRecords, useLeaflet, useProtopro)
│   └── dom/          # DOM utility hooks
├── config/
│   └── atproto/      # AT Protocol config (DID, PDS URL, collection IDs, URL builders)
├── data/
│   ├── json/         # Static JSON content
│   └── .csv/         # Source CSVs (converted via npm run convert-content)
├── lib/
│   ├── data/         # Data access utilities
│   └── utils/        # General utilities (mergeClasses, etc.)
├── types/
│   ├── atproto/      # AT Protocol record types
│   └── content/      # Content/domain types
└── scripts/          # Build-time scripts (e.g. CSV → JSON conversion)
```

---

## Code Quality Standards

### TypeScript
- Strict mode is enabled - respect it
- Use proper types, avoid `any` (warnings are configured)
- Prefer type inference where obvious, explicit types for function signatures
- Use `Result`-style error handling patterns where appropriate

### Component Architecture
**All components MUST follow this 4-file structure:**

```
ComponentName/
├── ComponentName.tsx           # Logic and JSX
├── ComponentName.types.ts      # TypeScript interfaces
├── ComponentName.styles.ts     # Tailwind class strings
└── ComponentName.constants.ts  # Hardcoded values (optional)
```

### Component Development Guidelines

**The Figma source of truth:** All UI decisions should reference the Figma file:
[renderg.host portfolio](https://www.figma.com/design/TucBQ75pTnYdNHaoOkn1Dr/renderg.host-portfolio)

**1. Use before creating**
Always check `src/components/` for an existing component before building a new one. The component library is extensive — reach for what's already there.

**2. Compose, don't duplicate**
New components should be built by composing existing components. If Figma shows a layout using `Section` + `Heading` + `Card*`, use those components — don't write custom markup that replicates their output.

**3. Extend, don't copy**
When a new component is functionally similar to an existing one, base it on that component. Copy-pasting and diverging creates drift; extending preserves consistency.

### Styling Rules
- **No margin utilities** - use `gap` for spacing between siblings, `padding` for internal
- **All text needs `leading-*`** - always specify line-height
- **Use `mergeClasses()`** from `@/lib/utils/mergeClasses` for conditional classes
- **No inline styles** - Tailwind only

### Code Conventions
- **Quotes**: Single quotes
- **Semicolons**: Yes
- **Trailing commas**: ES5 style
- **Line width**: 80 characters
- **Unused vars**: Prefix with `_`

### Error Handling
- Use try/catch in hooks and data utilities with meaningful error messages
- Never swallow errors silently
- Log errors to the console for debugging

---

## Form Standards

All forms must be accessible, usable, and provide clear feedback.

### Input Selection by Data Type

Choose the appropriate input for the data:

| Data Type               | Input Component                      | Example                      |
| ----------------------- | ------------------------------------ | ---------------------------- |
| Free text (short)       | `<input type="text">`                | Name, title                  |
| Free text (long)        | `<textarea>`                         | Bio, description             |
| Closed list (large)     | Select with typeahead/autocomplete   | Country, institution         |
| Closed list (small, ≤5) | Radio buttons                        | Honorific (Dr, Prof, Mr, Ms) |
| Boolean                 | Checkbox or toggle                   | Visibility settings          |
| Date                    | Date picker                          | Event date, graduation year  |
| URL                     | `<input type="url">` with validation | Website, social link         |
| Email                   | `<input type="email">`               | Contact email                |

### Validation & Error Handling

**Client-side:**
- Validate on blur and on submit
- Show inline errors immediately below the field
- Use `aria-describedby` to link error messages to inputs
- Disable submit button while submitting (prevent double-submit)

**Server-side:**
- Always validate again server-side (never trust client)
- Return structured error responses with field-level details
- Log validation failures for debugging

**Error message format:**
```typescript
// Field-level errors
{
  success: false,
  errors: {
    fieldName: 'Specific, actionable message'
  }
}
```

### Feedback & Notifications

**On success:**
- Show toast confirmation: e.g. "Message sent" / "Form submitted"
- Clear form after successful submission
- Update UI state immediately (optimistic updates where safe)

**On error:**
- Show toast for system errors: "Failed to save. Please try again."
- Show inline errors for validation failures
- Preserve user input - never clear the form on error

### Accessibility Requirements

- All inputs must have visible `<label>` elements (not just placeholder)
- Use `aria-required="true"` for required fields
- Use `aria-invalid="true"` when field has error
- Use `aria-describedby` to associate help text and error messages
- Ensure 4.5:1 color contrast for all text
- Forms must be fully keyboard navigable
- Focus management: move focus to first error on failed submit
- Loading states must be announced to screen readers

### Form Component Structure

```
FormName/
├── FormName.tsx           # Form logic, state, submission
├── FormName.types.ts      # Props, form values, validation types
├── FormName.styles.ts     # Tailwind classes
├── FormName.constants.ts  # Default values, options lists
└── FormName.validation.ts # Zod schema or validation functions
```

---

## AT Protocol Collections

This site reads data from Barry's personal PDS — it never writes to it.

**Identity:**
- DID: `did:plc:s2rczyxit2v5vzedxqs326ri`
- Handle: `@renderg.host`
- PDS: `eurosky.social`

**Collections currently in use:**

| Collection | Hook | Purpose |
| --- | --- | --- |
| `pub.leaflet.publication` | `useLeaflet` | Writing publication metadata |
| `pub.leaflet.document` | `useLeaflet` | Individual blog posts/articles |
| `blue.protopro.actor.profile` | `useProtopro` | Career history, skills, education |

### Adding a New Collection

1. Add the collection ID to `ATPROTO_COLLECTIONS` in `src/config/atproto/`
2. Add the corresponding TypeScript types to `src/types/atproto/`
3. Either use `useRecords<T>` directly, or create a dedicated hook in `src/hooks/atproto/` if transformation logic is needed

---

## Bug Workflow

### Raising Bugs (From VS Code)

When we discover a bug during development:

```bash
gh issue create \
  --title "Bug: [Brief description]" \
  --body "## Description
[What's happening]

## Steps to Reproduce
1.
2.
3.

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser:
- Node: $(node -v)" \
  --label bug
```

### For External Bug Reports

Direct users to: https://github.com/renderghost/portfolio/issues/new

### Fixing Bugs from Issues

1. **Read the issue**
   ```bash
   gh issue view <number>
   ```

2. **Create a fix branch**
   ```bash
   git checkout -b fix/issue-<number>-<short-description>
   ```

3. **Make the fix**
   - Follow component architecture
   - Run `npm run lint:fix`
   - Test locally with `npm run dev`

4. **User verification** (REQUIRED before any commit)
   - Present the fix to the user
   - User reviews and tests the implementation
   - User explicitly confirms the fix works as expected
   - **NEVER commit until user has verified**

5. **Commit with issue reference** (only after user verification)
   ```bash
   git commit -m "Fix #<number>: [description]"
   ```

6. **Push and create PR** (when user approves)
   ```bash
   git push -u origin fix/issue-<number>-<short-description>
   gh pr create \
     --title "Fix #<number>: [description]" \
     --body "## Summary
   [What was fixed and how]

   ## Testing
   - [ ] Tested locally
   - [ ] No lint errors

   Closes #<number>"
   ```

7. **After merge** - verify issue closes automatically via "Closes #N"

### Bug Labels
- `bug` - Confirmed bugs
- `needs-triage` - Unconfirmed reports
- `good-first-issue` - Simple fixes for new contributors
- `critical` - Breaking functionality

---

## Feature Workflow

1. **Create issue** with `enhancement` label first
2. **Create feature branch**
   ```bash
   git checkout -b feature/issue-<number>-<description>
   ```
3. **Implement the feature**
   - Follow component architecture
   - Run `npm run lint:fix`
   - Test locally with `npm run dev`
4. **User verification** (REQUIRED before any commit)
   - Present the implementation to the user
   - User reviews and tests the feature
   - User explicitly confirms it works as expected
   - **NEVER commit until user has verified**
5. **Commit, push, and create PR** (same as bug workflow)

---

## What To Do When Facing Complexity

**DON'T:**
- Stub it out with `// TODO`
- Skip it and move on
- Say "we'll come back to it"
- Implement a simplified version that doesn't match requirements

**DO:**
- Break the problem into smaller pieces
- Identify and resolve dependencies first
- Ask the user for guidance on approach
- Propose a phased plan where each phase is complete
- Discuss trade-offs before implementing

### Example: Adding a Complex New Feature

**WRONG:**
```typescript
export async function complexFeature() {
  // TODO: implement this later
  return null;
}
```

**RIGHT:**
1. Understand the full requirements
2. Identify dependencies (types, hooks, components)
3. Implement the data layer (types, hooks)
4. Create the UI components
5. Test each layer before moving to the next

---

## Quality Checklist

Before marking any task complete:

- [ ] All requirements from the issue are implemented
- [ ] No `// TODO` or placeholder code
- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` succeeds
- [ ] Tested locally in browser
- [ ] Component architecture followed (4-file structure)
- [ ] Types are complete (no `any` unless unavoidable)
- [ ] Error cases are handled
- [ ] Code is formatted (`npm run format`)

---