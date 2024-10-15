import type {
  DonutCreateDtoInterface,
  DonutExpiredDtoInterface,
  DonutPriceChangeDtoInterface,
  DonutProlongedDtoInterface,
  DonutCancelDtoInterface,
} from '@microservice/main';
import { MicroservicesEventConstant } from '@share';

export type RabbitmqMainMessageKey =
  keyof typeof MicroservicesEventConstant.mainServiceApi.message;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqMainMessages = {
  donutCreate: DonutCreateDtoInterface;
  donutProlonged: DonutProlongedDtoInterface;
  donutExpired: DonutExpiredDtoInterface;
  donutChangePrice: DonutPriceChangeDtoInterface;
  donutCancelled: DonutCancelDtoInterface;
};
