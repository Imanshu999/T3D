/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0d0d0d',
        surface: '#111111',
        glass: 'rgba(255,255,255,0.08)',
        border: 'rgba(255,255,255,0.08)',
        text: '#ffffff',
        'text-secondary': '#b3b3b3',
        accent: {
          blue: '#3b82f6',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          white: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      fontSize: {
        'display-lg': 'clamp(2.5rem, 5vw, 4.5rem)',
        'display-md': 'clamp(2rem, 4vw, 3.5rem)',
        'display-sm': 'clamp(1.5rem, 3vw, 2.5rem)',
        'body-lg': 'clamp(1.125rem, 2vw, 1.25rem)',
        'body-md': 'clamp(1rem, 1.5vw, 1.125rem)',
        'body-sm': 'clamp(0.875rem, 1vw, 1rem)',
      },
      spacing: {
        'section-padding': 'clamp(3rem, 5vw, 5rem)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
