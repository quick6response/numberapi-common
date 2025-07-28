/** Таблица фактов звонков */
export interface NumbersFactsCalls {
  numberId: number;
  userId: number;
  // факт звонка пользователю
  result: boolean;
  createdAt: Date;
}
