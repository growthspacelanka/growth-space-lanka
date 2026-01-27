module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0023E6',
        accent: '#FF5B22',
        'neutral-dark': '#1A1A1A',
        'neutral-medium': '#4A4A4A',
        'neutral-light': '#F8F8F8',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
};
