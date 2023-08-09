/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'text': '0 1px 1px rgba(0, 0, 0, 0.8)'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        main: '#F5F5F5',
        bg: '#7AADDB',
      },
      textColor: {
        'main': '#7AADDB',
        'bg': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
