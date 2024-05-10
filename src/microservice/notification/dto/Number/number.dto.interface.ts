import { NumberEssence, User } from '@share/types';
import { ParameterClientInfoActionEventAllPlatform } from '../../types';
import { OrganizationDtoInterface } from '../Organization';

export interface NumberFindDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
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
  extends ParameterClientInfoActionEventAllPlatform {
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  organization: OrganizationDtoInterface;
  date: number;
}
