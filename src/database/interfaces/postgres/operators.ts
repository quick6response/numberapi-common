/** Таблица операторов */
export interface Operators {
  id: number;
  name: string;
  photo: string | null;
  description: string | null;
  foundingDate: Date | null;
  integrationId: number | null;
  createdAt: Date;
  updatedAt: Date;
}
