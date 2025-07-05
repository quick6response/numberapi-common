import { MicroservicesEventConstant } from '@/microservice/share';
import type {
  DonutCreateDtoInterface,
  DonutExpiredDtoInterface,
  DonutPriceChangeDtoInterface,
  DonutProlongedDtoInterface,
  DonutCancelDtoInterface,
} from '@/microservice/api';

export type RabbitmqServiceApiEventsKeys =
  keyof typeof MicroservicesEventConstant.api.events;

/*
 * Событие и данные ожидаемые в обработчике
 */
export type RabbitmqServiceApiEventsDtoData = {
  donutCreate: DonutCreateDtoInterface;
  donutProlonged: DonutProlongedDtoInterface;
  donutExpired: DonutExpiredDtoInterface;
  donutChangePrice: DonutPriceChangeDtoInterface;
  donutCancelled: DonutCancelDtoInterface;
};
