module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        qhd: '2560px',
        uhd: '2048px',
      },
      colors: {
        main: '#0c0809',
        content: '#171717',
        primary: '#0DAB76',
        light: '#fff',
      },
      textColor: {
        main: '#fff',
        placeholder: '#595959',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
