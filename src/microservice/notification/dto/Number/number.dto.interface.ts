import type { ParameterRequestVkUserEventInterface } from '../../types';
import { OrganizationDtoInterface } from '../Organization';

export interface NumberFindDtoInterface
  extends ParameterRequestVkUserEventInterface {
  number: string;
  numberId: number;
  isNewNumber: boolean;
  isUpdate?: boolean;
  userId: number;
}

export interface NumberFindErrorDtoInterface extends NumberFindDtoInterface {
  errorText: unknown;
}

export interface NumberOrganizationPinDtoInterface
  extends ParameterRequestVkUserEventInterface {
  number: {
    number: string;
    numberId: number;
  };
  organization: OrganizationDtoInterface;
  date: number;
}
