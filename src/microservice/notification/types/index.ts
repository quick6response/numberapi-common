import { ParameterRequestVkUserEventInterface } from '@microservice/notification';
import { ClientPlatformEnum } from '@microservice/notification/types/parameter.request.action.type';

export * from './parameter.request.vk.type';
export * from './rabbitmq.number.api.service.type';

// множество разных интерфейсов, которые написаны под разные платформы
export type ParameterClientInfoActionEventAllPlatform =
  ParameterRequestVkUserEventInterface;

// тип, который помогает узнать информацию о пользователе на основе типа платформы
export type ParameterClientInfoActionEvent<
  Platform extends ClientPlatformEnum,
> = Platform extends ClientPlatformEnum.VK
  ? ParameterRequestVkUserEventInterface
  : //   : Platform extends ClientPlatformEnum.VK_BOT
    //     ? // Добавьте здесь тип для VK_BOT
    // : Platform extends ClientPlatformEnum.TELEGRAM
    //   ? // Добавьте здесь тип для TELEGRAM
    //   : Platform extends ClientPlatformEnum.ODNOKLASSNIKI
    //   ? // Добавьте здесь тип для ODNOKLASSNIKI
    //   : Platform extends ClientPlatformEnum.WEB
    //   ? // Добавьте здесь тип для WEB
    never;
