import { ApplicationVersionStatus } from '../../constants';

export interface ApplicationsVersions {
  id: number;
  version: string;
  status: ApplicationVersionStatus;
  createdAt: Date;
  updatedAt: Date;
}
