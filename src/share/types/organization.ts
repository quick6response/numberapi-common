import type { File } from '@share';

export interface Organization {
  id: number;
  name: string;
  site: string | null;
  description: string | null;
  typeId: number | null;
  type: OrganizationType | null;
  photoId: number | null;
  photo: File | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrganizationType {
  id: number;
  name: string;
  nameEn: string;
  nameShort?: string;
  nameShortEn?: string;
  createdAt: Date;
  updatedAt: Date;
}
