export enum UserRoleEnum {
  User = 'user',
  Admin = 'admin',
  Donut = 'donut',
  Helper = 'helper',
}

export interface User {
  id: number;
  vkId: number;
  numberUserId: number;
  numberId: number;
  name: string;
  avatar: string;
  role: UserRoleEnum;
}
