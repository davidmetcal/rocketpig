const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				turquoise: {
					DEFAULT: '#48EC9B',
					50: '#EEFDF6',
					100: '#DCFBEC',
					200: '#B7F8D8',
					300: '#92F4C3',
					400: '#6DF0AF',
					500: '#48EC9B',
					600: '#18E47F',
					700: '#12B163',
					800: '#0D7F47',
					900: '#084C2A',
				},
			},
		},
	},
	plugins: [],
	screens: {
		xs: '350px',
		sm: '640px',
		// => @media (min-width: 640px) { ... }

		md: '768px',
		// => @media (min-width: 768px) { ... }

		lg: '1024px',
		// => @media (min-width: 1024px) { ... }

		xl: '1280px',
		// => @media (min-width: 1280px) { ... }

		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	},
};
