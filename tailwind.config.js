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
        text: '#edf2f4',
        textSecondary: '#8d99ae',
        primary: '#d90429',
        primaryLight: '#ef233c',
        shadow: 'rgb(33,21,23)',
      },
    },
  },
  plugins: [

  ],
}
