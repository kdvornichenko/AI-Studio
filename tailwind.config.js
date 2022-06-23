/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		fontFamily: {
			halvar: 'Halvar Mittelschrift',
		},
		backgroundColor: {
			main: '#FBFBFD',
			blue: '#4061F8',
			white: '#FBFBFD',
			black: '#151516',
			mobMenu: '#E9EEF3',
			burgerBg: '#bfecff',
		},
		colors: {
			white: '#FBFBFD',
			black: '#151516',
			blue: '#4061F8',
		},
		extend: {
			boxShadow: {},
			backgroundImage: {},
			transitionTimingFunction: {},
		},
	},
	plugins: [],
}
