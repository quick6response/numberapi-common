import { NumberEssence, User } from '@share/types';
import type { ParameterRequestVkUserEventInterface } from '../../types';
import { OrganizationDtoInterface } from '../Organization';

export interface NumberFindDtoInterface
  extends ParameterRequestVkUserEventInterface {
  number: NumberEssence['number'];
  numberId: NumberEssence['id'];
  isNewNumber: boolean;
  isUpdate?: boolean;
  userId: User['id'];
}

export interface NumberFindErrorDtoInterface extends NumberFindDtoInterface {
  errorText: unknown;
}

/**
 * Для номера закреплена организация в системе
 */
export interface NumberOrganizationPinDtoInterface
  extends ParameterRequestVkUserEventInterface {
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  organization: OrganizationDtoInterface;
  date: number;
}
