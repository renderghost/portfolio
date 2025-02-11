import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
	children: React.ReactNode;
	level: HeadingLevel;
	className?: string;
}

const headingClasses: Record<HeadingLevel, string> = {
	h1: 'text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl',
	h2: 'text-3xl font-bold leading-tight tracking-tighter md:text-4xl',
	h3: 'text-2xl font-bold leading-tight md:text-3xl',
	h4: 'text-xl font-bold leading-tight md:text-2xl',
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ children, level, className = '' }, ref) => {
		const Component = level as HeadingElement;

		return (
			<Component
				ref={ref}
				className={`${headingClasses[level]} text-gray-900 ${className}`}
			>
				{children}
			</Component>
		);
	},
);

Heading.displayName = 'Heading';
