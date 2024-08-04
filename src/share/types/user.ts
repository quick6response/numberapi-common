import { ClientPlatform, UserRole } from '@constant';

/**
 * Информация о пользователе передаваемая в сервис для уведомлений
 */
export interface User {
  id: number;
  /**
   * @deprecated Будет удалено, после введения множественной авторизации на разных платформах.
   */
  idVk: number;
  lastName: string;
  firstName: string;
  role: UserRole;
}

/**
 * Привязанные социальные сети к пользователю
 */
export interface UserAuthAttachedSocialNetworks {
  id: number;
  name: string;
  clientPlatform: ClientPlatform;
  userId: User['id'];
}
