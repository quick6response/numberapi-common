export interface UserAnotherFindNumberDtoInterface {
  // номер, который вызвал триггер с привязкой
  number: string;
  numberId: number;
  isAnon: boolean;
  isBlock: boolean;
  // айди пользователя чей номер телефона
  userId: number;
  userVkId: number;
  date: number;
}
