import type { ParameterRequestVkUserEventInterface } from '../../types';

export interface AuthLoginDtoInterface
  extends ParameterRequestVkUserEventInterface {
  userId: number;
}

export interface AuthRegistrationDtoInterface
  extends ParameterRequestVkUserEventInterface {
  userId: number;
}
