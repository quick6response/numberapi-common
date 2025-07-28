import { OperatorNumber } from '@/microservice/share';

export interface OperatorCreateDtoInterface {
  date: number;
  operator: OperatorNumber;
}

export interface OperatorBindIntegrationDtoInterface {
  operator: { id: OperatorNumber['id']; name: OperatorNumber['name'] };
  integrationId: number;
  date: number;
}

// todo рассмотреть вариант с уведомлением о изменение операторов, если такие могу быть
