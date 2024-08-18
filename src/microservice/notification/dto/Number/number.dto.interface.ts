import type { ParameterClientInfoActionEventAllPlatformInterface } from '@microservice/notification';
import type { NumberEssence, User } from '@share/types';
import type { OrganizationDtoInterface } from '../Organization';

export enum StatusFindNumber {
  UPDATE = 'update',
  CREATE = 'create',
  CACHE = 'cache',
  FIND = 'find',
}

export interface NumberFindDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  status: StatusFindNumber;
  /**
   * @deprecated Используйте поле user
   * // todo удалить в версии 2.0.0
   */
  userId?: User['id'];
}

// ошибка в поиске номера
export type NumberFindErrorDto = {
  errorText: unknown;
} & NumberFindDto;

/**
 * Для номера закреплена организация в системе
 */
export type NumberOrganizationPinDto = {
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  organization: OrganizationDtoInterface;
  status: 'create' | 'update';
  date: number;
};
