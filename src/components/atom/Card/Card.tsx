// src/components/common/Card/Card.tsx

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseCardProps } from './types';

export const Card: React.FC<BaseCardProps> = ({
	className,
	coverImage,
	badge,
	meta,
	title,
	description,
	onClick,
}) => {
	const CardWrapper = onClick ? 'button' : 'div';

	return (
		<CardWrapper
			className={cn(
				'group relative flex flex-col bg-white rounded-lg overflow-hidden transition-all',
				onClick && 'cursor-pointer hover:shadow-lg',
				className,
			)}
			onClick={onClick}
		>
			{/* Cover Image */}
			{coverImage && (
				<div className='relative aspect-[16/9] w-full overflow-hidden bg-neutral-100'>
					<img
						src={coverImage}
						alt=''
						className='object-cover w-full h-full transition-transform group-hover:scale-105'
					/>
				</div>
			)}

			{/* Content */}
			<div className='flex flex-col gap-4 p-6'>
				{/* Badge + Meta */}
				<div className='flex items-center justify-between gap-4'>
					{badge && (
						<span
							className={cn(
								'inline-flex px-3 py-1 text-sm font-medium rounded-full',
								badge.variant === 'primary'
									? 'bg-brand-100 text-brand-900'
									: 'bg-neutral-100 text-neutral-900',
							)}
						>
							{badge.label}
						</span>
					)}
					{meta && (
						<div className='flex items-center gap-2 text-sm text-neutral-600'>
							{meta.company && <span>{meta.company}</span>}
							{meta.company && meta.date && <span>|</span>}
							{meta.date && <span>{meta.date}</span>}
						</div>
					)}
				</div>

				{/* Title */}
				<h3 className='text-2xl font-serif font-bold tracking-tight group-hover:text-brand-500'>
					{title}
				</h3>

				{/* Description */}
				{description && (
					<p className='text-neutral-600'>{description}</p>
				)}
			</div>
		</CardWrapper>
	);
};
