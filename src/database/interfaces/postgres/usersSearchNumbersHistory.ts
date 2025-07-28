/** Таблица истории поиска номеров */
export interface UsersSearchNumbersHistory {
  id: number;
  userAgent: string | null;
  ip: string | null;
  operatorId: number;
  numberId: number;
  userId: number;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
}
