/** Таблица типов организаций */
export interface OrganizationsTypes {
  id: number;
  name: string;
  nameEn: string;
  nameShort: string | null;
  nameShortEn: string | null;
  createdAt: Date;
  updatedAt: Date;
}
