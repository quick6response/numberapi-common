export interface Organization {
  id: number;
  name: string;
  site: string | null;
  description: string | null;
  typeId: number | null;
  type: OrganizationType | null;
  photo: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrganizationType {
  id: number;
  name: string;
  nameEn: string;
  nameShort: string | null;
  nameShortEn: string | null;
  createdAt: Date;
  updatedAt: Date;
}
