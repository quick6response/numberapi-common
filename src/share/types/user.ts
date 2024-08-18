import { ClientPlatform, UserRole } from '@share/constant';

/**
 * Информация о пользователе передаваемая в сервис для уведомлений
 */
export interface User {
  id: number;
  /**
   * Будет удалено, после введения множественной авторизации на разных платформах.
   */
  idVk: number;
  lastName: string;
  firstName: string;
  role: UserRole;
}

/**
 * Привязанные социальные сети к пользователю
 * Это наработки и может изменяется в будущем
 */
export interface UserAttachedSocialNetworks {
  id: number;
  name: string;
  platform: ClientPlatform;
  userId: User['id'];
}
