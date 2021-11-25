module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          blue: {
            dark: '#111827',
            light: '#0EA5E9',
          },
          white: '#FFFFFF'
        },
      },
    },
    fontFamily: {
      sans: ['"Inter"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
