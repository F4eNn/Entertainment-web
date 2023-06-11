/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		
	],
	theme: {
		extend: {
			colors: {
				'main-red': '#fc4747',
				'dark-blue': '#10141e',
				'greyish-blue': '#5a698f',
				'bookmark-button': '#2f3542',
				gray: '#9da0a7',
				'semi-dark-blue': '#161d2f',
			},
			borderRadius: {
				'radius-sm': '5px',
				'radius-md': '10px',
				'radius-xl': '15px',
			},

			screens: {
				xs: '576px',
			},
			fontSize: {
				'clamp-1rem': 'clamp(1rem, 2.2vw, 1.5rem)',
			},
			'nav-calc': 'calc(100vh - 50px)',
		},
	},
	plugins: [],
}
