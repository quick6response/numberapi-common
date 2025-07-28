import { Organizations, OrganizationsTypes } from '@/database/postgres';

export interface Organization {
  id: Organizations['id'];
  name: Organizations['name'];
  site: Organizations['site'];
  description: Organizations['description'];
  typeId: Organizations['typeId'];
  type: OrganizationType;
  photo: Organizations['photo'];
  createdAt: number;
  updatedAt: number;
}

export interface OrganizationType {
  id: OrganizationsTypes['id'];
  name: OrganizationsTypes['name'];
  nameEn: OrganizationsTypes['nameEn'];
  nameShort: OrganizationsTypes['nameShort'];
  nameShortEn: OrganizationsTypes['nameShortEn'];
  createdAt: number;
  updatedAt: number;
}
