// tailwind.config.js
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ...
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      },
    },
  },
  //...
}