export interface DonutSubscriptionIssuanceDtoInterface {
  userId: number;
  userVkId: number;
  // был ли пользователь в системе
  isUser: boolean;
  // дата начала подписки
  startDate?: number;
  // дата окончания подписки
  endDate?: number;
  // сумма подписки
  amount?: number;
  // цена подписки за месяц
  price?: number;
  date: number;
}

export interface DonutSubscriptionProlongedDtoInterface
  extends Pick<
    DonutSubscriptionIssuanceDtoInterface,
    'userId' | 'userVkId' | 'date'
  > {}

export interface DonutSubscriptionExpiredDtoInterface
  extends Pick<
    DonutSubscriptionIssuanceDtoInterface,
    'userId' | 'userVkId' | 'date'
  > {}
