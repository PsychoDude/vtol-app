/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/checklists/*.{md,mdx}'],
	theme: {
		extend: {
			height: {
				70: '70px'
			}
		}
	},
	plugins: []
};
