import type {
  OrganizationDtoInterface,
  ParameterClientInfoActionEventAllPlatformInterface,
} from '@microservice/notification';
import type { NumberEssence, User } from '@share/types';

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
}

// ошибка в поиске номера
export type NumberFindErrorDto = {
  errorText: string;
} & NumberFindDto;

/**
 * Для номера закреплена организация в системе
 */
export type NumberOrganizationPinDto = {
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  organization: {
    id: OrganizationDtoInterface['id'];
    name: OrganizationDtoInterface['name'];
    site: OrganizationDtoInterface['site'];
  };
  status: 'create' | 'update';
  date: number;
};

/**
 * Обновление информации о номере кнон задачей закончено успешно
 */
export interface NumberScheduleUpdatedSuccessDto {
  number: string;
  numberId: number;
}

/**
 * Обновление информации о номере кнон задачей закончено с ошибкой
 */
export interface NumberScheduleUpdatedErrorDto {
  number: string;
  numberId: number;
  // количество ошибок, с учетом текущей
  countError: number;
  // максимальное количество ошибок
  maxCountError: number;
  errorText: string;
}

/**
 * Общее событие о завершении обновления номеров
 */
export interface NumberScheduleUpdatedSummaryDto {
  // количество обработанных номеров
  totalProcessed: number;
  // количество обновленных номеров
  updatedCount: number;
  // количество накопленных ошибок
  errorCount: number;
  // закончено ли обновление номеров полностью
  wasInterrupted: boolean;
  // время завершения
  endDate: number;
  // время начала
  startDate: number;
}
