import { NumberSearchUserStatus } from '../../constants';

/** Таблица пользователей, которые ищут номера */
export interface NumbersSearchUsers {
  id: string;
  ip: string;
  userAgent: string;
  userId: number;
  // искомый номер
  number: string;
  // статус поиска
  status: NumberSearchUserStatus;
  // Поиск с подпиской vk donut
  useSubscriptionVkDonut: boolean;
  /** Учитывать запись при расчете дневного лимита*/
  isConsiderDayLimit: boolean;
  // используемый бонус за рекламу при поиске номера
  advertisingBonusId: number | null;
  createdAt: Date;
  updatedAt: Date;
}
