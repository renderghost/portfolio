// src/components/Typography/styles.ts
export const headingStyles = {
	base: 'font-bold text-slate-900 dark:text-slate-100',
	sizes: {
		1: 'text-4xl md:text-5xl mb-6',
		2: 'text-3xl md:text-4xl mb-5',
		3: 'text-2xl md:text-3xl mb-4',
		4: 'text-xl md:text-2xl mb-3',
	},
} as const;

export const paragraphStyles = {
	base: 'text-slate-700 dark:text-slate-300',
	sizes: {
		S: 'text-sm leading-5',
		M: 'text-base leading-6',
		L: 'text-lg leading-7',
	},
} as const;
