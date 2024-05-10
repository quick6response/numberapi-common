import type { User } from '@share/types';
import type { ParameterClientInfoActionEventAllPlatform } from '../../types';

export type AuthLoginDto = {
  userId: User['id'];
} & ParameterClientInfoActionEventAllPlatform;

export type AuthRegistrationDto = {
  userId: User['id'];
} & ParameterClientInfoActionEventAllPlatform;
