import { cn } from '@/lib/utils';
import React from 'react';
import { artworkStyles } from './Artwork.styles';
import { ArtworkProps } from './Artwork.types';

export const Artwork: React.FC<ArtworkProps> = ({ name, className }) => {
  return <img src={`/Artworks/${name}.svg`} alt={name} className={cn(artworkStyles.base, className)} />;
};
