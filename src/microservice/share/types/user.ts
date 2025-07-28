import { Users } from '@/database/postgres';

/**
 * Информация о пользователе передаваемая в сервис для уведомлений
 */
export interface User {
  id: Users['id'];
  idVk: Users['idVk'];
  lastName: Users['lastName'];
  firstName: Users['firstName'];
  role: Users['role'];
  donut: Users['donut'];
}
