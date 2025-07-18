# React + Vite + TypeScript + Tailwind CSS 3 Website Template

## Complete Guide: From Development to GitHub Pages Deployment

### 🛠️ Tech Stack
- **Frontend Framework**: React 19+ with TypeScript
- **Build Tool**: Vite 7+
- **Styling**: Tailwind CSS 3.4+ + Custom CSS
- **Animations**: GSAP (optional)
- **Deployment**: GitHub Pages with GitHub Actions
- **Development Environment**: WSL/Windows + VS Code

---

## 📋 Prerequisites

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)
- **GitHub Account** - [Sign up](https://github.com/)


---

## 🚀 Step 1: Project Setup

### 1.1 Create New Vite React Project
```bash
npm create vite@latest my-website-name -- --template react-ts
cd my-website-name
npm install
```

### 1.2 Install Tailwind CSS 3
```bash
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
```

### 1.3 Configure Tailwind CSS 3

**tailwind.config.js:** (Tailwind CSS 3.4+)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette (replace with your brand colors)
        'primary-orange': '#FF6A2A',
        'soft-pink': '#FFF3F0',
        'cream': '#FFF8F3',
        'dark-text': '#181311',
        'muted-text': '#886f63',
        'vintage-brown': '#a38560',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'custom': ['Your-Custom-Font', 'cursive'],
      },
      // Tailwind 3 specific extensions
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Inter:wght@400;500;700;900&family=Kristi&display=swap');

:root {
  --primary-orange: #FF6A2A;
  --soft-pink: #FFF3F0;
  --cream: #FFF8F3;
  --dark-text: #181311;
  --muted-text: #886f63;
  --vintage-brown: #a38560;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--cream);
  color: var(--dark-text);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

.font-kristi {
  font-family: 'Kristi', cursive;
}

html {
  scroll-behavior: smooth;
}

/* Custom utility classes for Tailwind 3 */
.rajasthani-dots {
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 106, 42, 0.1) 1px, transparent 0);
  background-size: 20px 20px;
}
```

### 1.4 Optional: Install GSAP for Animations
```bash
npm install gsap
npm install @types/gsap
```

---

## 🏗️ Step 2: Project Structure

### Recommended Folder Structure
```
my-website-name/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   └── common/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🎨 Step 3: Component Development with Tailwind 3

### 3.1 Header Component Template
```typescript
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-primary-orange/10 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-orange/5 via-transparent to-vintage-brown/5"></div>
      </div>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <h1 className="text-3xl font-bold text-primary-orange">Your Logo</h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" href="#home">
            Home
          </a>
          <a className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" href="#about">
            About
          </a>
          <a className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" href="#services">
            Services
          </a>
          <a className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" href="#contact">
            Contact
          </a>
        </nav>

        <button className="hidden md:inline-block px-5 py-2 text-sm font-bold text-white bg-primary-orange rounded-full hover:bg-orange-600 transition-colors">
          Get Started
        </button>

        <button 
          className="md:hidden text-dark-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-soft-pink">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a className="block text-dark-text hover:text-primary-orange transition-colors" href="#home">Home</a>
            <a className="block text-dark-text hover:text-primary-orange transition-colors" href="#about">About</a>
            <a className="block text-dark-text hover:text-primary-orange transition-colors" href="#services">Services</a>
            <a className="block text-dark-text hover:text-primary-orange transition-colors" href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
```

### 3.2 Hero Section Template
```typescript
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-soft-pink overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Floating Motifs */}
        <div className="absolute top-1/4 left-10 w-32 h-32 opacity-40 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown animate-spin-slow">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-6 space-y-6">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary-orange">
          Your Brand
        </h1>
        <p className="text-lg md:text-xl text-muted-text font-medium tracking-wide max-w-2xl">
          Your compelling tagline or description goes here
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary-orange text-white text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105" 
             href="#services">
            <span>Get Started</span>
          </a>
          <a className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-cream text-dark-text text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105" 
             href="#about">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### 3.3 Main App Structure with Section Dividers
```typescript
// src/App.tsx
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

// Traditional Divider Component
const TraditionalDivider = ({ variant = "simple" }: { variant?: "simple" | "ornate" | "geometric" }) => {
  const patterns = {
    simple: (
      <div className="flex justify-center items-center">
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-orange to-transparent"></div>
      </div>
    ),
    ornate: (
      <div className="flex justify-center items-center space-x-4">
        <div className="w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
          </svg>
        </div>
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-orange to-transparent"></div>
        <div className="w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
          </svg>
        </div>
      </div>
    ),
    geometric: (
      <div className="flex justify-center items-center space-x-2">
        <div className="w-6 h-6 bg-primary-orange transform rotate-45"></div>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-vintage-brown to-transparent"></div>
        <div className="w-8 h-8 border-2 border-primary-orange transform rotate-45"></div>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-vintage-brown to-transparent"></div>
        <div className="w-6 h-6 bg-primary-orange transform rotate-45"></div>
      </div>
    )
  };

  return (
    <div className="flex justify-center py-8 px-4">
      {patterns[variant]}
    </div>
  );
};

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <TraditionalDivider variant="simple" />
          {/* Add more sections here */}
          <TraditionalDivider variant="ornate" />
          {/* Add more sections here */}
          <TraditionalDivider variant="geometric" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
```

---

## ⚙️ Step 4: Configuration for GitHub Pages

### 4.1 Configure Vite for GitHub Pages

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

### 4.2 Update package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.5.2",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "vite": "^7.0.0"
  }
}
```

### 4.3 Update index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Website Name</title>
    <meta name="description" content="Your website description">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 🚀 Step 5: GitHub Pages Deployment

### 5.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Setup React + Vite + Tailwind 3 project"
```

### 5.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com/new)
2. Repository name: `your-repository-name`
3. Make it **public**
4. **Don't** initialize with README
5. Click "Create repository"

### 5.3 Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repository-name.git
git branch -M main
git push -u origin main
```

### 5.4 Create GitHub Actions Workflow

**Create file: `.github/workflows/deploy.yml`**
```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm install --force
        
      - name: Build project
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v5
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5.5 Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "GitHub Actions"
4. Workflow will automatically run

---

## 🎯 Step 6: Tailwind 3 Best Practices

### 6.1 Common Tailwind 3 Classes Used
```css
/* Layout & Positioning */
relative absolute fixed sticky
inset-0 top-0 left-0 right-0 bottom-0
z-10 z-50

/* Flexbox & Grid */
flex flex-col flex-row items-center justify-center
grid grid-cols-1 md:grid-cols-2 gap-4 gap-12

/* Sizing */
w-full h-full size-full min-h-screen
w-32 h-32 w-36 h-36 w-40 h-40

/* Spacing */
p-4 p-6 py-8 py-16 py-20 px-6
m-4 mb-8 space-x-4 space-y-6

/* Typography */
text-sm text-base text-lg text-xl text-3xl text-6xl text-8xl
font-normal font-medium font-bold font-playfair
leading-tight leading-relaxed tracking-wide

/* Colors */
text-primary-orange text-dark-text text-muted-text
bg-cream bg-soft-pink bg-primary-orange
border-primary-orange/10

/* Effects */
opacity-10 opacity-20 opacity-30 opacity-40
animate-pulse animate-bounce animate-spin-slow
shadow-lg shadow-xl
backdrop-blur-md

/* Responsive Design */
hidden md:flex md:inline-block
sm:flex-row md:grid-cols-2 lg:text-4xl
```

### 6.2 Custom Component Classes
```css
/* Add to your CSS for reusable patterns */
@layer components {
  .btn-primary {
    @apply flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary-orange text-white text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105;
  }
  
  .btn-secondary {
    @apply flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-cream text-dark-text text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105;
  }
  
  .section-container {
    @apply py-16 px-6 container mx-auto relative;
  }
  
  .floating-element {
    @apply absolute opacity-20 animate-pulse pointer-events-none;
  }
}
```

### 6.3 Performance Optimization
```typescript
// Lazy loading components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-orange"></div>
    </div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

## 🔧 Step 7: Common Issues and Solutions

### 7.1 Tailwind 3 Specific Issues

**Issue: Classes not applying**
- Ensure content paths in tailwind.config.js include all your files
- Check if you're using custom color names correctly
- Verify @tailwind directives are in your CSS

**Issue: Custom colors not working**
- Use kebab-case for color names: `text-primary-orange` not `text-primaryOrange`
- Access custom colors with: `bg-your-color-name`

**Issue: Responsive classes not working**
- Tailwind 3 uses mobile-first approach
- Use: `text-sm md:text-lg lg:text-xl`
- Not: `lg:text-xl md:text-lg text-sm`

### 7.2 Build and Deployment Issues

**Issue: White page after deployment**
- Check browser console for errors
- Verify base path in vite.config.ts matches repository name
- Ensure all assets use relative paths: `./vite.svg` not `/vite.svg`

**Issue: Tailwind styles not in production**
- Check if purge/content configuration includes all component files
- Verify build process includes PostCSS

---

## 📦 Step 8: Deployment Checklist

### Pre-Deployment
- [ ] All Tailwind classes working locally
- [ ] Custom colors and fonts configured
- [ ] No TypeScript errors
- [ ] Responsive design tested on mobile/desktop
- [ ] Build succeeds locally (`npm run build`)
- [ ] Assets paths are relative

### GitHub Setup
- [ ] Repository created with correct name
- [ ] Vite config base path matches repo name
- [ ] GitHub Actions workflow file added
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled with "GitHub Actions" source

### Post-Deployment
- [ ] Site loads without console errors
- [ ] All Tailwind styles applying correctly
- [ ] Custom colors and animations working
- [ ] Mobile responsiveness verified
- [ ] All links and navigation functional

---

## 🌐 Your Website URL

After successful deployment, your website will be available at:
`https://yourusername.github.io/your-repository-name/`

---

## 🔄 Continuous Development

### Making Updates
```bash
# Make changes to your code
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site.

### Advanced Tailwind 3 Features to Explore
- **Container Queries** (CSS Container Queries)
- **Dynamic Color Generation** with CSS variables
- **Custom Plugin Development**
- **JIT (Just-In-Time) compilation** optimization
- **Dark Mode** with `class` strategy
- **Print Styles** optimization

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS 3 Documentation](https://tailwindcss.com/)
- [Tailwind 3 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GSAP Documentation](https://greensock.com/docs/)

---

**Happy Coding with Tailwind 3! 🚀**

*This template is specifically configured for Tailwind CSS 3.4+ and includes all the modern features and best practices for building professional websites.*