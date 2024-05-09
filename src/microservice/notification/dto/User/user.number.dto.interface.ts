import { NumberEssence, User } from '@share/types';

export interface UserAnotherFindNumberDtoInterface {
  // номер, который вызвал триггер с привязкой
  number: NumberEssence['number'];
  numberId: NumberEssence['id'];
  isAnon: boolean;
  isBlock: boolean;
  // айди пользователя чей номер телефона
  userId: User['id'];
  userVkId: number;
  date: number;
}
