import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			black: 'var(--base00)',
			white: 'var(--base05)',
			gray: 'var(--base0C)',
			blue: 'var(--base0D)',
			green: 'var(--base09)'
		}
	},

	plugins: [typography]
} satisfies Config;
