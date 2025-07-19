// Centralized background texture definitions for TechView
export const backgroundTextures = {
  noiseFilter: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
  grain: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.95' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.05'/%3E%3C/svg%3E")`,
  radialGradient: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)`
};

// Style objects for background layers
export const backgroundStyles = {
  noiseLayer: {
    backgroundImage: backgroundTextures.noiseFilter,
    backgroundSize: '180px 180px'
  },
  grainLayer: {
    backgroundImage: backgroundTextures.grain,
    backgroundSize: '50px 50px'
  },
  radialLayer: {
    backgroundImage: backgroundTextures.radialGradient,
    backgroundSize: '400px 400px, 300px 300px, 200px 200px'
  }
};