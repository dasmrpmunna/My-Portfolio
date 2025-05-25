/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Blue primary color with shades
        blue: {
          50: '#e6f1fe',
          100: '#cce4fd',
          200: '#99c9fb',
          300: '#66aef9',
          400: '#3393f6',
          500: '#0078f4',
          600: '#0060c3',
          700: '#004892',
          800: '#002f61',
          900: '#001830',
        },
        // Purple secondary color with shades
        purple: {
          50: '#f2effd',
          100: '#e5dffb',
          200: '#cbbefc',
          300: '#b19eef',
          400: '#977dfc',
          500: '#7c5cf9',
          600: '#6349c7',
          700: '#4a3795',
          800: '#322563',
          900: '#191232',
        },
        // Teal accent color with shades
        teal: {
          50: '#e6fcfa',
          100: '#ccf9f6',
          200: '#99f3ed',
          300: '#66ede3',
          400: '#33e7da',
          500: '#00e1d1',
          600: '#00b4a7',
          700: '#00877d',
          800: '#005a54',
          900: '#002d2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 25px rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};