# TechView AI - Project Documentation

## Project Overview
TechView AI is a modern React application built with Vite, showcasing AI-powered technology solutions. The project is currently on the `feature/herSection_v2` branch and includes multiple interactive sections including Hero, Solutions, Results, and Blog components.

## Tech Stack & Dependencies

### Core Framework
- **React 19.1.0** - Main UI framework
- **TypeScript 5.8.3** - Type safety and development experience
- **Vite 7.0.4** - Build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Custom Fonts**: Akkurat (primary), Inter (fallback), Familjen Grotesk, Edu NSW ACT Hand
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - Browser compatibility

### Animation & Interactions
- **GSAP 3.13.0** - High-performance animations
- **ScrollSmoother** - Smooth scrolling implementation
- **Custom animation components** for text effects and transitions

### Routing & Navigation
- **React Router DOM 7.6.3** - Client-side routing

### Development Tools
- **ESLint 9.30.1** - Code linting
- **TypeScript ESLint 8.35.1** - TypeScript-specific linting rules

## Project Structure

```
techview_react/
├── src/
│   ├── components/
│   │   ├── Blog/           # Blog section component
│   │   ├── Header/         # Navigation header
│   │   ├── Hero/           # Hero section with animations
│   │   ├── Loading/        # Loading screen component
│   │   ├── PhoneMockup/    # Phone mockup components
│   │   ├── Results/        # Results showcase section
│   │   ├── Solutions/      # Solutions overview section
│   │   └── UI/             # Reusable UI components
│   │       ├── AnimatedArrowButton.tsx
│   │       ├── CustomNavButton.tsx
│   │       ├── ScrambleText.tsx
│   │       └── SplitTextReveal.tsx
│   ├── assets/             # Static assets including fonts
│   ├── utils/              # Utility functions (scrollSmoother)
│   └── App.tsx             # Main application component
├── public/                 # Public assets
└── IMAGES/                 # Project images and mockups
```

## Centralized Features

### 1. **Animation System**
- GSAP-based animations throughout the application
- Custom text animation components (ScrambleText, SplitTextReveal)
- Smooth scrolling with ScrollSmoother integration
- Loading screen with transition effects

### 2. **Component Architecture**
- Modular component structure with clear separation of concerns
- Reusable UI components in `/components/UI/`
- Consistent styling patterns using Tailwind CSS
- TypeScript interfaces for type safety

### 3. **Styling System**
- Tailwind CSS for utility-first styling
- Custom font loading (Akkurat as primary brand font)
- Responsive design patterns
- Debug outline system for development

### 4. **Development Workflow**
- ESLint configuration for code quality
- TypeScript for type safety
- Vite for fast development and building
- Component-based architecture

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (TypeScript check + Vite build)
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Current Branch Status
- **Branch**: `feature/herSection_v2`
- **Recent Changes**: Blog section added, 3rd page implementation, stable version with centralized styling

## Activity Log & Context Tracking

### Recent Development Sessions
- **Latest**: Blog section implementation and hero section improvements
- **Previous**: Added third page functionality and centralized styling system
- **Stable Version**: Established core component architecture

### Key Decisions Made
1. **GSAP Integration**: Chose GSAP for premium animation capabilities
2. **Tailwind CSS**: Adopted for rapid UI development and consistency
3. **Component Modularity**: Structured components for reusability
4. **Custom Font Strategy**: Implemented Akkurat as brand font with fallbacks
5. **ScrollSmoother**: Integrated for premium user experience

### Development Notes
- The application uses a loading screen pattern to ensure smooth initialization
- Debug outline system is implemented for development visualization
- Phone mockup components are centralized for consistency
- Custom animation components are reusable across sections

---

## Instructions for Claude

### Context Restoration
When starting a new session, review this file to understand:
- Current project state and recent changes
- Technologies and dependencies in use
- Component architecture and patterns
- Available scripts and development workflow

### Code Standards
- Follow existing TypeScript patterns
- Use Tailwind CSS for styling
- Implement GSAP animations consistently
- Maintain component modularity
- Keep fonts and UI patterns consistent

### Testing & Quality
- Run `npm run lint` before committing
- Use `npm run build` to verify TypeScript compilation
- Test animations and responsive design
- Ensure loading states work properly

### Activity Tracking
Please update this section with:
- New features implemented
- Design decisions made
- Issues encountered and resolved
- Changes to project structure or dependencies