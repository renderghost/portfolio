import type { ATProtocolBlob } from './defineBase';

export interface GrainAspectRatio {
  width: number;
  height: number;
}

export interface GrainPhotoValue {
  $type: 'social.grain.photo';
  photo: ATProtocolBlob;
  alt: string;
  createdAt?: string;
  aspectRatio?: GrainAspectRatio;
}

export interface GrainPhotoItem {
  uri: string;
  alt: string;
  blobUrl: string;
  createdAt?: string;
  aspectRatio?: GrainAspectRatio;
}
