export enum UserRoleEnum {
  User = 'user',
  Admin = 'admin',
  Donut = 'donut',
  Helper = 'helper',
}

export interface UserDtoInterface {
  id: number;
  idVk: number;
  lastName: string;
  firstName: string;
  donut: boolean;
  admin: boolean;
  numberUserId: number;
  role: UserRoleEnum;
}

// информация о пользователя полученная из ВК
export interface UserVkDtoInterface {
  lastName: string;
  firstName: string;
  id: number;
}

export interface UserCreateDtoInterface {
  // информация о пользователя полученная из ВК
  userVkInfo: UserVkDtoInterface;
  // информация в системе о созданном пользователе
  userInfo: UserDtoInterface;
  reason: string;
  date: number;
}

export interface UserUpdateDtoInterface {
  preValue: UserDtoInterface;
  nextValue: UserDtoInterface;
  date: number;
  reason?: string;
}
