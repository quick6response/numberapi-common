import { UserRole } from '../../constants';

/** Таблица пользователей */
export interface Users {
  id: number;
  idVk: number;
  lastName: string;
  firstName: string;
  donut: boolean;
  admin: boolean;
  numberUserId: number | null;
  role: UserRole;
}
