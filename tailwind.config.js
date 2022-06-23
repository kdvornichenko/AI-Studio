/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		fontFamily: {
			halvar: 'Halvar Mittelschrift',
		},
		backgroundColor: {
			blue: '#4061F8',
			white: '#FBFBFD',
			black: '#151516',
			lightGrey: '#E9EEF3',
			burgerBg: '#bfecff',
		},
		colors: {
			white: '#FBFBFD',
			black: '#151516',
			blue: '#4061F8',
			serviceH4: '#9A52FD',
		},
		extend: {
			boxShadow: {},
			backgroundImage: {},
			transitionTimingFunction: {},
		},
	},
	plugins: [],
}
