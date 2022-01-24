module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      main: '#0c0708',
    },
    extend: {
      screens: {
        'qhd': '2560px',
      }
    },
  },
  plugins: [],
}
