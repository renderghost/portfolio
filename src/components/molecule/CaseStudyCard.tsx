// src/components/portfolio/CardCaseStudy.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/atom/Card/Card';

interface CardCaseStudyProps {
	caseStudy: {
		title: string;
		company: string;
		date: string;
		type: string;
		summary: string;
		coverImage?: string;
		slug: string;
	};
}

export const CardCaseStudy: React.FC<CardCaseStudyProps> = ({ caseStudy }) => {
	const navigate = useNavigate();

	return (
		<Card
			coverImage={caseStudy.coverImage}
			badge={{
				label: caseStudy.type,
				variant: 'primary',
			}}
			meta={{
				company: caseStudy.company,
				date: caseStudy.date,
			}}
			title={caseStudy.title}
			description={caseStudy.summary}
			onClick={() => navigate(`/portfolio/${caseStudy.slug}`)}
		/>
	);
};
