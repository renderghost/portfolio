// src/components/common/Card/types.ts

export interface BaseCardProps {
	className?: string;
	coverImage?: string;
	badge?: {
		label: string;
		variant?: 'primary' | 'secondary';
	};
	meta?: {
		company?: string;
		date?: string;
		subtitle?: string;
	};
	title: string;
	description?: string;
	onClick?: () => void;
}
