import { ApplicationVersionViewUserAction } from '../../constants';

/** Пользователи просмотра версии приложения */
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
