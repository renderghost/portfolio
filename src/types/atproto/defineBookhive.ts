import type { ATProtocolBlob } from './defineBase';

export interface BookValue {
  title: string;
  authors: string;
  hiveId: string;
  createdAt: string;
  cover?: ATProtocolBlob;
  stars?: number;
  status?: string;
  review?: string;
  owned?: boolean;
  startedAt?: string;
  finishedAt?: string;
  hiveBookUri?: string;
}
