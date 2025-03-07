import React from 'react';

// TypeScript Types
interface TagProps {
	label: string;
	emphasis?: 'low' | 'med' | 'high';
}

interface TagsProps {
	items: string[];
	emphasis?: 'low' | 'med' | 'high';
}

// Tailwind Styles
const getEmphasisClasses = (emphasis: 'low' | 'med' | 'high') => {
	switch (emphasis) {
		case 'low':
			return 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
		case 'high':
			return 'text-white bg-blue-600 dark:bg-blue-500';
		case 'med':
		default:
			return 'text-gray-800 bg-gray-200 dark:text-gray-300 dark:bg-gray-700';
	}
};

// Tag Component
const Tag: React.FC<TagProps> = ({ label, emphasis = 'med' }) => {
	return (
		<span
			className={`inline-block px-3 py-1 rounded-2xl text-sm font-medium ${getEmphasisClasses(emphasis)}`}>
			{label}
		</span>
	);
};

// Tags Component
const Tags: React.FC<TagsProps> = ({ items, emphasis = 'med' }) => {
	return (
		<div className='flex flex-wrap gap-2'>
			{items.map((item, index) => (
				<Tag key={index} label={item} emphasis={emphasis} />
			))}
		</div>
	);
};

export { Tag, Tags };
