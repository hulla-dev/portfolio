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
			backgroundColor: {
				main: '#0C0809',
				primary: '#116466',
				secondary: '#D9B08C',
				tertiary: '#FFCB9A',
				light: '#D1e8e2',
			},
		},
	},
	plugins: [],
}
