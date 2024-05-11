import { ParameterClientInfoActionEventAllPlatform } from '@microservice/notification/types/parameter.client.info.type';
import type { User } from '@share/types';

export type AuthLoginDto = {
  userId: User['id'];
} & ParameterClientInfoActionEventAllPlatform;

export type AuthRegistrationDto = {
  userId: User['id'];
} & ParameterClientInfoActionEventAllPlatform;
