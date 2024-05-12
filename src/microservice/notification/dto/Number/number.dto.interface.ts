import { ParameterClientInfoActionEventAllPlatform } from '@microservice/notification/types/parameter.client.info.type';
import { NumberEssence, User } from '@share/types';
import { OrganizationDtoInterface } from '../Organization';

export type NumberFindDto = {
  number: NumberEssence['number'];
  numberId: NumberEssence['id'];
  isNewNumber: boolean;
  isUpdate?: boolean;
  /**
   * @deprecated Используйте поле user
   * // todo удалить в версии 2.0.0
   */
  userId?: User['id'];
} & ParameterClientInfoActionEventAllPlatform;

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
  date: number;
};
