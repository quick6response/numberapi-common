/** Таблица номеров организаций */
export interface NumbersOrganizations {
  id: number;
  organizationId: number;
  numberId: number;
  createdAt: Date;
  updatedAt: Date;
  actualTo: Date | null;
}
