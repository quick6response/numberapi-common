import { Organization } from '@share';

// информация об организации приходящей с сервисов
export interface OrganizationDtoInterface {
  id: Organization['id'];
  name: Organization['name'];
  site: Organization['site'];
  description: Organization['description'];
  typeId: Organization['typeId'];
  type: {
    id: Organization['type']['id'];
    name: Organization['type']['name'];
    nameEn: Organization['type']['nameEn'];
  } | null;
  photoId: Organization['photoId'];
  photo: {
    id: Organization['photo']['id'];
    link: Organization['photo']['link'];
  } | null;
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

export interface OrganizationCreateErrorDtoInterface {
  message: string | unknown;
  // какие данные пытались записать
  value: Omit<OrganizationDtoInterface, 'id'>;
  date: number;
}

export interface OrganizationUpdateErrorDtoInterface {
  organizationId: number;
  // какие данные пытаемся записать
  value: OrganizationDtoInterface;
  // текст ошибки
  message: string | unknown;
  date: number;
}
