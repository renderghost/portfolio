import React from 'react';

type ParagraphSize = 'default' | 'small' | 'large';

interface ParagraphProps {
	children: React.ReactNode;
	size?: ParagraphSize;
	className?: string;
}

const sizeClasses: Record<ParagraphSize, string> = {
	small: 'text-sm leading-6',
	default: 'text-base leading-7',
	large: 'text-lg leading-8',
};

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ children, size = 'default', className = '' }, ref) => {
		return (
			<p
				ref={ref}
				className={`${sizeClasses[size]} text-gray-900 ${className}`}
			>
				{children}
			</p>
		);
	},
);

Paragraph.displayName = 'Paragraph';
