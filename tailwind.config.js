module.exports = {
  //...
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
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // 이 경로가 가장 일반적인 경로 설정입니다.
  ],
  // ...
}