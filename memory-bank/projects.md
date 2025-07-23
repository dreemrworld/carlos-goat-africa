# Projects Section Implementation

## Data Structure
Projects are defined in `src/lib/data.tsx` as an array of objects with the following structure:
```typescript
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}
```

## Component Hierarchy
1. **Projects Component** (`src/components/projects.tsx`):
   - Main container for all projects
   - Maps through projects data and renders individual Project components
   - Handles section animations and visibility

2. **Project Component** (`src/components/project.tsx`):
   - Renders individual project cards
   - Handles project image, title, description, and links
   - Manages hover and click interactions

## Rendering Logic
1. Projects data is imported from `src/lib/data.tsx`
2. The Projects component maps through the data array
3. For each project, a Project component is rendered with the project data as props
4. Project cards are styled using Tailwind CSS classes
5. Links open in new tabs using `target="_blank"`

## Adding New Projects
To add a new project:
1. Open `src/lib/data.tsx`
2. Add a new object to the projects array following the Project interface
3. Include:
   - Title
   - Description
   - Relevant tags
   - Image URL (place image in `public/images/`)
   - Optional: Live link and GitHub repository
4. The new project will automatically appear in the Projects section
