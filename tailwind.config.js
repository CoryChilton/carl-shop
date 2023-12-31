/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' }
        },
        fadeInFromTop: {
          '0%': {opacity: 0, transform: 'translateY(-30%)' },
          '100%': {opacity: 1, transform: 'translateY(0%)'},
        },
        fadeOutToTop: {
          '0%': {opacity: 1, transform: 'translateY(0%)'},
          '100%': {opacity: 0.1, transform: 'translateY(-30%)'},
        },
        slideInFromRight: {
          '0%': {opacity: 1, transform: 'translateX(100%)'},
          '100%': {opacity: 1, transform: 'translateX(0%)'},
        }
      },
      animation: {
        carousel: 'marquee 120s linear infinite',
        fadeInMenu: 'fadeInFromTop 0.2s ease-out',
        fadeOutMenu: 'fadeOutToTop 0.2s ease-in',
        mobileMenu: 'slideInFromRight 0.3s ease-in-out',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
