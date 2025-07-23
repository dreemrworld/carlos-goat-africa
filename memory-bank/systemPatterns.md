# System Patterns: Carlos Araújo Portfolio

## Architecture Overview
The portfolio is built using Next.js with TypeScript, leveraging its file-based routing system. The project follows a component-based architecture with clear separation of concerns. Key architectural features include:
- Pages: Defined in the `src/app` directory using Next.js 13+ App Router
- Components: Reusable UI elements in `src/components`
- Data: Static data stored in `src/lib/data.tsx`
- Styles: Global styles in `src/styles/globals.css` with Tailwind CSS for utility classes

## Key Technical Decisions
1. **Framework**: Next.js for server-side rendering and static generation
2. **Styling**: Tailwind CSS for utility-first styling
3. **State Management**: React Context API for theme management
4. **Form Handling**: React Hook Form with Zod validation
5. **Animation**: Framer Motion for smooth transitions
6. **Type Safety**: TypeScript for type checking and better developer experience

## Component Relationships
- **Root Layout**: `src/app/layout.tsx` wraps all pages
- **Theme Provider**: `src/components/theme-provider.tsx` manages dark/light mode
- **Section Components**: Each section (About, Projects, Experience) has its own component
- **Shared Components**: Buttons, headers, and other reusable elements are in `src/components`

## Critical Implementation Paths
1. **Development Server**:
   - Start with: `npx next dev`

2. **Theme Toggling**:
   - Theme state managed by `theme-provider.tsx`
   - Persisted in localStorage
   - Applied via Tailwind dark mode classes

2. **Contact Form**:
   - Form schema defined in `src/lib/form-schema.ts`
   - Validation handled by Zod
   - Submission processed by `src/actions/send-email.ts`

3. **Section Visibility**:
   - Intersection Observer hook in `src/hooks/use-section-in-view.ts`
   - Used to highlight active sections in the navigation

## Data Flow Patterns
1. **Static Data**:
   - Projects, experience, and skills data stored in `src/lib/data.tsx`
   - Imported and mapped in respective components

2. **Dynamic Data**:
   - Contact form submissions sent via server action
   - No external API dependencies

3. **Theme Data**:
   - Theme state flows from provider to all components
   - Toggled via `theme-toggle.tsx` component
