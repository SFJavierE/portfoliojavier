module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
          '4/5xl': '2.5rem'
        },
        animation: {
          'fade-out': 'fadeOut 4s ease-out forwards',
        },
        keyframes: {
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          }
        }
      }
    },
    plugins: [],
  }