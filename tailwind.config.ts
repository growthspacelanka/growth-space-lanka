// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['var(--font-barlow-condensed)', 'sans-serif'],
        'roboto-condensed': ['var(--font-roboto-condensed)', 'sans-serif'],
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

export default config;