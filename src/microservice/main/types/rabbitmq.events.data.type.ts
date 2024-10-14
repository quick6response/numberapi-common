import type {
  DonutCreateDtoInterface,
  DonutExpiredInterface,
  DonutProlongedInterface,
} from '@microservice/main';
import { MicroservicesEventConstant } from '@share';

export type RabbitmqMainMessageKey =
  keyof typeof MicroservicesEventConstant.mainServiceApi.message;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqMainMessages = {
  donutCreate: DonutCreateDtoInterface;
  donutProlonged: DonutProlongedInterface;
  donutExpired: DonutExpiredInterface;
};
