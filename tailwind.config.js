/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        carrara: {
          50: '#FAFBFD',
          100: '#F3F6FA',
          200: '#E8EEF5',
          300: '#D5DFEC',
          vein: '#CBD5E1',
          nero: '#090D16',
        },
        obsidian: {
          900: '#0B0F19',
          950: '#06080F',
        },
        sapphire: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0F1D4A',
        },
        gold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          dark: '#B45309',
        }
      },
      boxShadow: {
        'carved': '0 2px 4px rgba(15, 23, 42, 0.02), 0 10px 25px -5px rgba(15, 23, 42, 0.04), inset 0 1px 0 0 rgba(255, 255, 255, 0.95), inset 0 -1px 0 0 rgba(226, 232, 240, 0.6)',
        'carved-hover': '0 20px 40px -10px rgba(29, 78, 216, 0.09), 0 10px 20px -5px rgba(15, 23, 42, 0.03), inset 0 1px 0 0 rgba(255, 255, 255, 1)',
        'monolith': '0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8), inset 0 1px 2px 0 rgba(255, 255, 255, 1)',
        'crystal': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
      },
      backgroundImage: {
        'marble-radial': 'radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F8FAFD 50%, #EEF4FB 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
        'sapphire-gradient': 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 50%, #2563EB 100%)',
      }
    },
  },
  plugins: [],
}
