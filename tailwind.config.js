/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#080C14',
          secondary: '#0D1321',
          card: '#111827',
          hover: '#1a2235',
        },
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          purple: '#A78BFA',
          glow: 'rgba(34,211,238,0.15)',
        },
        text: {
          primary: '#F0F6FC',
          secondary: '#8B949E',
          muted: '#4D5968',
        },
        border: {
          subtle: '#1E2D3D',
          bright: '#2D4A6A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.12), transparent)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34,211,238,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(34,211,238,0.25)' },
        }
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover': '0 8px 40px rgba(34,211,238,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glow-cyan': '0 0 30px rgba(34,211,238,0.2)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.2)',
      }
    },
  },
  plugins: [],
}
