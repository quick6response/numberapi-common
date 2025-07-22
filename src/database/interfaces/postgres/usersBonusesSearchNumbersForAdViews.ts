export interface UsersBonusesSearchNumbersForAdViews {
  id: number;
  // полезная нагрузка
  payload: string | null;
  hash: string;
  ip: string;
  userAgent: string;
  userId: number;
  // доступность бонуса к использованию
  isAvailability: boolean;
  // предварительная деактивация в начале поиска номера
  isPreDeactivate: boolean;
  // использован ли бонус
  isUsed: boolean;
  // дата создания
  createdAt: Date;
  updatedAt: Date;
}
