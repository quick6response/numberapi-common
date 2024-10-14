import { MicroservicesEventConstant } from '@share';
import type {
  DonutSubscriptionExpiredDtoInterface,
  DonutSubscriptionIssuanceDtoInterface,
  DonutSubscriptionProlongedDtoInterface,
} from '@microservice/notification/dto';

export type RabbitmqMainMessageKey =
  keyof typeof MicroservicesEventConstant.mainServiceApi.message;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqMainMessages = {
  donutCreate: DonutSubscriptionIssuanceDtoInterface;
  donutProlonged: DonutSubscriptionProlongedDtoInterface;
  donutExpired: DonutSubscriptionExpiredDtoInterface;
};
