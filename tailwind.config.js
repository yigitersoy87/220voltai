/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFE000',
          50: '#FFF9E0',
          100: '#FFF5C2',
          200: '#FFED85',
          300: '#FFE549',
          400: '#FFDD0C',
          500: '#FFD700',
          600: '#CCA800',
          700: '#997F00',
          800: '#665500',
          900: '#332B00',
        },
        amber: {
          DEFAULT: '#FFA800',
          500: '#FFA800',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-x': 'scrollX 30s linear infinite',
        'scroll-x-reverse': 'scrollXReverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'accent-pulse': 'accentPulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollXReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        accentPulse: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      }
    },
  },
  safelist: [
    'from-yellow-500/20',
    'to-yellow-500/5',
    'border-yellow-500/10',
  ],
  plugins: [],
};
