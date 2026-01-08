# About This Site

This website serves as both a delivery of my job application to Buffer and a demonstration of clean frontend code.

## Tech Stack

- **React 19** with **TypeScript** for type-safe component development
- **Mantine UI** for a consistent, themeable design system
- **Vite** for fast development and optimized builds
- **Vercel Analytics** and **LogRocket** for performance tracking and session replay

## Code Highlights

### Theme Management
Centralized design tokens in `theme.ts`:
- Custom color palettes (Buffer Green, neutral grays)
- Typography scales and heading styles
- Component-level defaults for consistency
- All defined using Mantine's `createTheme` API

### Responsive Design
Mobile-first approach with Mantine's responsive utilities:
- Grid layouts that adapt from mobile to desktop
- Collapsible burger menu navigation for mobile devices
- Conditional rendering for different viewport sizes
- Touch-friendly navigation and interactions

### User Experience
- Smooth scroll navigation with Mantine hooks
- Progressive enhancement (Loom player with mobile fallback)
- Optimized animations and transitions
- Accessible markup and keyboard navigation

## Project Structure

```
src/
├── App.tsx                    # Main application shell
├── theme.ts                   # Design system configuration
├── components/
│   ├── ApplicationQA.tsx      # Structured Q&A content
│   ├── JobDescriptionSection.tsx
│   ├── JobAspectCard.tsx      # Reusable card components
│   ├── WhyJakeSection.tsx
│   ├── SectionHeader.tsx
│   └── LoomVideo.tsx          # Video player with fallback
└── assets/                    # Images and media
```

## Development Practices

- **Component Composition**: Favoring small, focused components over monolithic structures
- **TypeScript First**: Leveraging types for self-documenting code and catching errors early
- **Design System**: Consistent theming through centralized configuration
- **Performance**: Optimized builds, lazy loading, and analytics integration
- **Accessibility**: Semantic HTML and ARIA attributes where needed

## Running Locally

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

---

Built with attention to detail, clean code practices, and a focus on maintainability—the same approach I bring to every project.