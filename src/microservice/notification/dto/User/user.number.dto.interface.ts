import type { NumberEssence, User } from '@share/types';

export interface UserAnotherFindNumberDtoInterface {
  // номер, который вызвал триггер с привязкой
  number: NumberEssence['number'];
  numberId: NumberEssence['id'];
  isAnon: boolean;
  isBlock: boolean;
  // айди пользователя чей номер телефона
  userId: User['id'];
  // todo под разные платформы должен быть разный формат айди пользователя или другая инфорация о том, кому информацию отправить
  userVkId: number;
  date: number;
}
