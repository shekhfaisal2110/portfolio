/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        enter: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(-10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        leave: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        pingOnce: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.75' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        enter: 'enter 0.3s ease-out forwards',
        leave: 'leave 0.2s ease-in forwards',
        'ping-once': 'pingOnce 0.6s ease-in-out',
      },
      animation: {
        'glow-pulse': 'glow 2s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 198, 255, 0.9), 0 0 30px rgba(0, 114, 255, 0.7)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 198, 255, 0.7), 0 0 40px rgba(0, 114, 255, 0.5)' },
        },
      },
       animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

