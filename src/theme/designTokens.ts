/**
 * Centralized Design System & Color Architecture for Phaenicio
 * Single source of truth for colors, typography, shadows, and spacing.
 */

export const designTokens = {
  colors: {
    // Primary Color: Brand Crimson Red (derived from logo)
    primary: {
      DEFAULT: '#CE0010',
      hover: '#A3000B',
      light: '#FFF1F2', // soft rose-50 overlay
      glow: 'rgba(206, 0, 16, 0.15)',
    },

    // Secondary Color: Brand Forest Green (derived from logo)
    secondary: {
      DEFAULT: '#1F8B51',
      hover: '#17693C',
      light: '#F0FDF4', // soft green-50 overlay
      glow: 'rgba(31, 139, 81, 0.15)',
    },

    // Neutral Colors (Enterprise charcoal and premium slates)
    neutral: {
      dark: '#130A0A',      // Logo Dark Charcoal
      darker: '#0B0606',    // Slate-950 equivalent for deep panels
      text: '#334155',      // Slate-700 for body text readability
      muted: '#64748B',     // Slate-500 for secondary text
      bg: '#F8FAFC',        // Slate-50 for page backgrounds
      cardBg: 'rgba(255, 255, 255, 0.75)', // Translucent card surface
      border: 'rgba(226, 232, 240, 0.8)',  // Semi-translucent boundaries
    }
  },

  // Shadows
  shadows: {
    premium: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
    premiumHover: '0 12px 30px -4px rgba(19, 10, 10, 0.08), 0 4px 12px -2px rgba(19, 10, 10, 0.03)',
  },

  // Typography (Enterprise-level sizes and families)
  typography: {
    fonts: {
      sans: "'Inter', system-ui, -apple-system, sans-serif",
      display: "'Plus Jakarta Sans', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    sizes: {
      hero: 'clamp(3rem, 6vw, 4.5rem)',      // For homepage hero titles
      titleLarge: 'clamp(2.5rem, 5vw, 3.5rem)',  // For inner page headers
      titleMedium: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      titleSmall: 'clamp(1.25rem, 2vw, 1.75rem)',
      bodyLarge: '1.125rem',
      bodyNormal: '1rem',
      bodySmall: '0.875rem',
    }
  }
};
