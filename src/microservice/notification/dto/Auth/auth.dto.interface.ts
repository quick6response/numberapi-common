import { User } from '@share/types';
import type { ParameterRequestVkUserEventInterface } from '../../types';

export interface AuthLoginDtoInterface
  extends ParameterRequestVkUserEventInterface {
  userId: User['id'];
}

export interface AuthRegistrationDtoInterface
  extends ParameterRequestVkUserEventInterface {
  userId: User['id'];
}
