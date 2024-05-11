import { ParameterRequestVkUserEventInterface } from '@microservice/notification';
import { ClientPlatformEnum } from '@microservice/notification/types/parameter.request.action.type';
import { ParameterRequestTelegramUserEventInterface } from '@microservice/notification/types/parameter.request.tg.type';

export * from './parameter.request.vk.type';
export * from './rabbitmq.number.api.service.type';

// множество разных интерфейсов, которые написаны под разные платформы
export type ParameterClientInfoActionEventAllPlatform =
  | ParameterRequestVkUserEventInterface
  | ParameterRequestTelegramUserEventInterface;

// тип, который помогает узнать информацию о пользователе на основе типа платформы
export type ParameterClientInfoActionEvent<
  Platform extends ClientPlatformEnum,
> = Platform extends ClientPlatformEnum.VK
  ? ParameterRequestVkUserEventInterface['clientInfo']
  : Platform extends ClientPlatformEnum.TELEGRAM
    ? ParameterRequestTelegramUserEventInterface['clientInfo']
    : //   : Platform extends ClientPlatformEnum.ODNOKLASSNIKI
      //   ? // Добавьте здесь тип для ODNOKLASSNIKI
      //   : Platform extends ClientPlatformEnum.WEB
      //   ? // Добавьте здесь тип для WEB
      never;
