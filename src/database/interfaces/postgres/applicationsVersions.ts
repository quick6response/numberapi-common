import { ApplicationVersionStatus } from '../../constants';

/** Таблица версий приложений */
export interface ApplicationsVersions {
  id: number;
  version: string;
  status: ApplicationVersionStatus;
  createdAt: Date;
  updatedAt: Date;
}
