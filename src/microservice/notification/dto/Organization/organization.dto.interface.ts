export interface OrganizationDtoInterface {
  id: number;
  name: string;
  photo: string;
  site: string;
}

export interface OrganizationCreateDtoInterface {
  date: number;
  organization: OrganizationDtoInterface;
}

export interface OrganizationUpdateDtoInterface {
  prevValue: OrganizationDtoInterface;
  nextValue: OrganizationDtoInterface;
  date: number;
}

export interface OrganizationCreateErrorDtoInterface {
  message: string | unknown;
  date: number;
  // какие данные пытаемся записать
  value: Omit<OrganizationDtoInterface, 'id'>;
}

export interface OrganizationUpdateErrorDtoInterface {
  organizationId: number;
  message: string | unknown;
  date: number;
  // какие данные пытаемся записать
  value: OrganizationDtoInterface;
}
