import { ClientPlatformEnum } from '@constant/platform.constant';
import { ParameterRequestTelegramUserEventInterface } from '@microservice/notification/types/parameter.request.tg.type';

// множество разных интерфейсов, которые написаны под разные платформы
import { ParameterRequestVkUserEventInterface } from '@microservice/notification/types/parameter.request.vk.type';

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
