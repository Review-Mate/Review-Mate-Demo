import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        primary: '#4397AA',
        red: '#EF6961',
        blue: '#4AA4B9',
        lightBlue: '#009AAD',
        gray01: '#666666',
        gray02: '#999999',
        gray03: '#BFBFBF',
        gray04: '#CBCBCB',
        gray05: '#D9D9D9',
        gray06: '#F0F0F0',
        gray07: '#F1F4F6',
        gray08: '#F9FBFD',
      },
      fontFamily: {
        body: ['Noto_Sans_KR', 'sans-serif'],
      },
      fontWeight: {
        norm: '400',
        mid: '500',
        bold: '700',
      },
      fontSize: {
        heading: '1.75rem',
        title: '1.5rem',
        subTitle: '1.25rem',
        body1: '1.125rem',
        body2: '1rem',
        body3: '0.875rem',
        caption: '0.8125rem',
        num1: '1.875rem',
        num2: '1.5rem',
        num3: '1.25rem',
        num4: '0.875rem',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        appear1: 'appear 0.8s 0s ease-out forwards',
        appear2: 'appear 0.8s 0.2s ease-out forwards',
        appear3: 'appear 0.8s 0.4s ease-out forwards',
        appear4: 'appear 0.8s 1.0s ease-out forwards',
        appear5: 'appear 0.8s 1.2s ease-out forwards',
        appear6: 'appear 0.8s 1.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
