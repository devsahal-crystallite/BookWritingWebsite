/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
        positioncustom: 'position-custom',
        'custom1': '100% 100%',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'website-design-company': "url('/assets/images/banner/custom-web.webp')",
          'second-section-2': "url('/assets/images/excep-service-bg.jpg')",
          'demand-section-3': "url('/assets/images/newimg/eexceptional-patern.png')",
          'demand-section-31': "url('/assets/images/newimg/eexceptional-list.png')",
          'CTA': "url('/assets/images/newimg/cta-bg.jpg')",
          'process-bg': "url('/assets/images/newimg/process-bg.jpg')",
          'process-bg22': "url('/assets/images/newimg/editing-before.png')",
          'bg-cta2': "url('/assets/images/newimg/amazing-bg.jpg')",
          'footer-bg': "url('/assets/images/newimg/footer-bg.jpg')",
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  plugins: [],
}
