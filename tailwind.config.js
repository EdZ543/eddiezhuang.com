module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBlue: '#111827',
      lightBlue: '#0EA5E9',
      white: '#FFFFFF'
    },
    fontFamily: {
      sans: ['"Inter"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
