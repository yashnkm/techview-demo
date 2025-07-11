# Dapper Website Recreation Plan

## Design Analysis

Based on the provided images, I need to recreate a modern B2B marketing agency website with the following key components:

### 1. Navigation Header
- **Logo**: "Dapper" with a green square logo element
- **Navigation Menu**: Services, Expertise, Cases, Resources, About, Careers
- **CTA Button**: "Talk to us" with green background and arrow icon
- **Color Scheme**: Clean white background with green accent (#4ADE80 approximately)

### 2. Hero Section Content
- **Left Side Main Content**:
  - Small green badge: "B2B Marketing Agency"
  - Large heading: "We build **high-performing** marketing engines for B2B Brands"
  - Subtext: "We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI."
  - CTA button: "Discover more" with green background and down arrow

- **Right Side Elements**:
  - Decorative 3D leaf/plant graphic in grayscale
  - Floating UI card showing "54% increase in pipeline with Demand Generation strategy"
  - Small "storyteq" branded element
  - Additional decorative green squares/rectangles

### 3. Visual Elements
- **Background**: Clean white/light gray
- **Decorative Elements**: 
  - Green geometric shapes (squares, rectangles)
  - 3D rendered plant/leaf graphics
  - Floating UI components
  - Subtle gradients and shadows

### 4. Typography
- **Primary Font**: Modern sans-serif (likely Inter or similar)
- **Heading Style**: Mix of regular and italic weights
- **Color Hierarchy**: 
  - Primary text: Dark gray/black
  - Secondary text: Medium gray
  - Accent: Green (#4ADE80)

## Technical Implementation Plan

### Component Structure
```
src/
├── components/
│   ├── Header/
│   │   └── Header.tsx
│   ├── Hero/
│   │   └── Hero.tsx
│   ├── UI/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── Graphics/
│       ├── LeafGraphic.tsx
│       └── FloatingElements.tsx
├── styles/
│   └── globals.css
└── App.tsx
```

### Color Palette
- Primary Green: #4ADE80 (green-400)
- Background: #FFFFFF
- Text Primary: #1F2937 (gray-800)
- Text Secondary: #6B7280 (gray-500)
- Light Gray: #F9FAFB (gray-50)

### Responsive Breakpoints
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Implementation Steps

1. **Setup Project Structure** ✓
2. **Create Navigation Header** - Clean layout with logo and menu
3. **Build Hero Section** - Two-column layout with content and graphics
4. **Add Decorative Elements** - Floating shapes and 3D graphics
5. **Implement Responsive Design** - Mobile-first approach
6. **Polish and Test** - Fine-tune spacing and alignment

## Key Features to Implement

- [ ] Responsive navigation with mobile menu
- [ ] Hero section with proper grid layout
- [ ] Floating UI cards with statistics
- [ ] Decorative geometric elements
- [ ] 3D leaf/plant graphics (using CSS or SVG)
- [ ] Smooth hover animations
- [ ] Mobile-responsive design
- [ ] Accessibility features

## Design Considerations

- **Layout**: CSS Grid and Flexbox for responsive design
- **Graphics**: SVG for scalable graphics and icons
- **Animation**: CSS transitions for hover effects
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Proper ARIA labels and keyboard navigation

This design follows modern B2B SaaS design principles with clean layouts, strategic use of white space, and professional color scheme.