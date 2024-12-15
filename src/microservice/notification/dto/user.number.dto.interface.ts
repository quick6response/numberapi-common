import type { NumberEssence, User } from '@share/types';

export interface UserAnotherFindNumberDtoInterface {
  // номер, который вызвал триггер с привязкой
  number: NumberEssence['number'];
  numberId: NumberEssence['id'];
  // поиск анонимный
  isAnon: boolean;
  // заблокирован ли просмотр информации о номере
  isBlock: boolean;
  // айди пользователя чей номер телефона
  userId: User['id'];
  userVkId: User['idVk'];
  date: number;
}
