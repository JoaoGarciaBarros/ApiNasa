/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'space-blue': '#38bdf8',
        space: {
          900: '#020617',
          800: '#0b1220',
          700: '#111c33',
          600: '#152444',
          500: '#1c3a6a',
          400: '#2a5aa5',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.25), 0 0 24px rgba(59,130,246,0.22)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-up': 'slideUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
