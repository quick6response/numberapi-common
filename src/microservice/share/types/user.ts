import { ClientPlatform } from '@/microservice/share/constant';
import { UserRole } from '../../../database';

/**
 * Информация о пользователе передаваемая в сервис для уведомлений
 */
export interface User {
  id: number;
  idVk: number;
  lastName: string;
  firstName: string;
  role: UserRole;
  donut: boolean;
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
