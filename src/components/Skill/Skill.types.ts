import { ArtworkName } from '@/components/Artwork/Artwork.types';

export interface SkillProps {
  skillArtwork: ArtworkName;
  skillTitle: string;
  skillDescription: string;
  skillApproach: string;
  skillTags: string; //NEW
  className?: string;
}
