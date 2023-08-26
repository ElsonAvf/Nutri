module.exports = {
  content: ["./src/pages/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        popup: 'popup .4s ease-in-out forwards',
      },
      keyframes: {
        popup: {
          to: { transform: 'translateY(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
