import type { UserVk, User } from '@/microservice/share/types';

export interface UserDtoInterface extends User {}

// информация о пользователя полученная из ВК
export interface UserVkDtoInterface extends UserVk {}

export interface UserCreateDtoInterface {
  // информация о пользователя полученная из ВК
  userInfoVk: UserVkDtoInterface;
  // информация в системе о созданном пользователе
  userInfo: UserDtoInterface;
  reason: string;
  date: number;
}

export interface UserUpdateDtoInterface {
  prevValue: UserDtoInterface;
  nextValue: UserDtoInterface;
  date: number;
  reason?: string;
}
