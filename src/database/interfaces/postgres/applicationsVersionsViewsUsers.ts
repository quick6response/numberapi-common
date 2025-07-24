import { ApplicationVersionViewUserAction } from '../../constants';

/** Таблица просмотров версий приложения пользователями */
export interface ApplicationsVersionsViewsUsers {
  id: number;
  userId: number;
  versionId: number;
  status: boolean;
  action: ApplicationVersionViewUserAction;
  slideIndex: number;
  createdAt: Date;
  updatedAt: Date;
}
