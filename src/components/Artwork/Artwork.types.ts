export type ArtworkName = 'design' | 'operations' | 'strategy';

export interface ArtworkProps {
  name: ArtworkName;
  className?: string;
}
