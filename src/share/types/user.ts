import { ClientPlatformEnum } from '@constant/platform.constant';

export enum UserRoleEnum {
  User = 'user',
  Admin = 'admin',
  Donut = 'donut',
  Helper = 'helper',
}

/**
 * Информация о пользователе передаваемая в сервис для уведомлений
 */
export interface User {
  id: number;
  /**
   * @deprecated Скоро будет удалено, после введения множественной авторизации на разных платформах
   */
  idVk: number;
  lastName: string;
  firstName: string;
  role: UserRoleEnum;
}

/**
 * Привязанные социальные сети к пользователю
 */
export interface UserAuthAttachedSocialNetworks {
  id: number;
  name: string;
  clientPlatform: ClientPlatformEnum;
  userId: User['id'];
}
