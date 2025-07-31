/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Tahoma', 'Segoe UI', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'tahoma': ['Tahoma', 'sans-serif'],
      },
      colors: {
        'sra': {
          'primary': '#0F4C75',      // Lapis-Lazuli Blue
          'light-blue': '#459FD9',   // Light Blue
          'orange': '#F8AB2E',       // Orange for CTA buttons
          'soft-green': '#85B48E',   // Soft Green
          'purple': '#892B67',       // Purple
        }
      },
      borderRadius: {
        'sharp': '2px',
        'modern': '4px',
      },
      boxShadow: {
        'sharp': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'sharp-lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'sharp-xl': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
