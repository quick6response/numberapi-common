import { User } from '@share/types';
import type { ParameterClientInfoActionEventAllPlatform } from '../../types';

export interface AuthLoginDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  userId: User['id'];
}

export interface AuthRegistrationDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  userId: User['id'];
}
