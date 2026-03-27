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
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        mclaren: {
          950: '#050505',
          900: '#080808',
          800: '#0D0D0D',
          700: '#111111',
          600: '#161616',
          500: '#1C1C1C',
        },
        orange: {
          DEFAULT: '#FF6B00',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB347',
          400: '#FFA000',
          500: '#FF8000',
          600: '#FF6B00',
          700: '#E65100',
          800: '#BF360C',
          900: '#8B2500',
        },
      },
      animation: {
        'aurora-1': 'aurora-1 18s ease-in-out infinite',
        'aurora-2': 'aurora-2 22s ease-in-out infinite',
        'aurora-3': 'aurora-3 26s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'aurora-1': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) scale(1)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%',
          },
          '33%': {
            transform: 'translate(5%, -8%) scale(1.08)',
            borderRadius: '40% 60% 30% 70% / 70% 40% 60% 30%',
          },
          '66%': {
            transform: 'translate(-4%, 6%) scale(0.95)',
            borderRadius: '70% 30% 50% 50% / 30% 70% 30% 70%',
          },
        },
        'aurora-2': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) scale(1)',
            borderRadius: '40% 60% 50% 50% / 60% 40% 70% 30%',
          },
          '33%': {
            transform: 'translate(-6%, 5%) scale(1.1)',
            borderRadius: '60% 40% 30% 70% / 40% 60% 50% 50%',
          },
          '66%': {
            transform: 'translate(8%, -4%) scale(0.92)',
            borderRadius: '30% 70% 60% 40% / 70% 30% 40% 60%',
          },
        },
        'aurora-3': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) scale(1)',
            borderRadius: '50% 50% 40% 60% / 40% 70% 30% 60%',
          },
          '50%': {
            transform: 'translate(-5%, -6%) scale(1.12)',
            borderRadius: '70% 30% 60% 40% / 50% 50% 70% 30%',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
}
