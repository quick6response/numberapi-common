import { Organization, OrganizationType } from '@/microservice/share';

// информация об организации приходящей с сервисов
export interface OrganizationDtoInterface {
  id: Organization['id'];
  name: Organization['name'];
  site: Organization['site'];
  description: Organization['description'];
  typeId: Organization['typeId'];
  type: {
    id: OrganizationType['id'];
    name: OrganizationType['name'];
    nameEn: OrganizationType['nameEn'];
  } | null;
  photo: string | null;
  createdAt: Organization['createdAt'];
  updatedAt: Organization['updatedAt'];
}

export interface OrganizationCreateDtoInterface {
  organization: OrganizationDtoInterface;
  date: number;
}

export interface OrganizationUpdateDtoInterface {
  prevValue: OrganizationDtoInterface;
  nextValue: OrganizationDtoInterface;
  date: number;
}

type OrganizationErrorValueType =
  | (Pick<OrganizationDtoInterface, 'name' | 'site' | 'description'> & {
      photo: string;
    })
  | { name: string; site: string; photo: string }
  | Omit<OrganizationDtoInterface, 'id'>
  | { [key: string]: unknown };

export interface OrganizationCreateErrorDtoInterface {
  message: string | unknown;
  // какие данные пытались записать
  value: OrganizationErrorValueType;
  date: number;
}

export interface OrganizationUpdateErrorDtoInterface {
  organizationId: number;
  // какие данные пытаемся записать
  value: OrganizationErrorValueType;
  // текст ошибки
  message: string | unknown;
  date: number;
}
