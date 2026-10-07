/** @type {import('tailwindcss').Config} */
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0A2540',
          600: '#123257',
          500: '#1C4470',
          100: '#DCE5EF',
          50: '#EEF3F8',
        },
        accent: {
          DEFAULT: '#00C853',
          600: '#00B34A',
          700: '#00703A',
          100: '#C9F2D9',
          50: '#E7F9EE',
        },
        surface: '#F5F7FA',
        ink: '#1A1A1A',
        muted: '#6B7280',
        line: '#E6E9EF',
        danger: {
          DEFAULT: '#EF4444',
          700: '#B91C1C',
          50: '#FEF0F0',
        },
        warning: {
          DEFAULT: '#F59E0B',
          700: '#92400E',
          50: '#FFF7E6',
        },
        info: {
          DEFAULT: '#2F6FED',
          700: '#1E4FB8',
          50: '#EDF3FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,37,64,0.04), 0 6px 20px rgba(10,37,64,0.06)',
        sheet: '0 -10px 40px rgba(10,37,64,0.14)',
        pop: '0 16px 48px rgba(10,37,64,0.20)',
      },
    },
  },
};
