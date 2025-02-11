// src/components/Typography/types.ts
import { ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4;
export type ParagraphSize = 'S' | 'M' | 'L';

export interface TypographyBaseProps {
	children: ReactNode;
	truncate?: boolean;
	className?: string;
}

export interface HeadingProps extends TypographyBaseProps {
	level: HeadingLevel;
}

export interface ParagraphProps extends TypographyBaseProps {
	size?: ParagraphSize;
}
