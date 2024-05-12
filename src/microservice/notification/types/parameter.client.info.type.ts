import { ClientPlatformEnum } from '@constant/platform.constant';
import { ParameterRequestTelegramUserEventInterface } from '@microservice/notification/types/parameter.request.tg.type';

// множество разных интерфейсов, которые написаны под разные платформы
import { ParameterRequestVkUserEventInterface } from '@microservice/notification/types/parameter.request.vk.type';
import { User } from '@share';

// todo понять кака тут использовать разные платформы и побороть ошибки типизации в сервисе АПИ
export type ParameterClientInfoActionEventAllPlatform =
  ParameterRequestVkUserEventInterface;

/**
 * Интерфейс со всеми платформами и платформами
 */
export interface ParameterClientInfoActionEventAllPlatformInterface {
  clientInfo:
    | ParameterRequestVkUserEventInterface['clientInfo']
    | ParameterRequestTelegramUserEventInterface['clientInfo'];
  clientPlatform:
    | ParameterRequestVkUserEventInterface['clientPlatform']
    | ParameterRequestTelegramUserEventInterface['clientPlatform'];
  user?: User;
  date: number;
}

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

export function getClientInfoByPlatform<Platform extends ClientPlatformEnum>(
  platform: Platform,
  clientInfo: ParameterClientInfoActionEventAllPlatformInterface['clientInfo'],
): {
  clientInfo: ParameterClientInfoActionEvent<Platform>;
  clientPlatform: Platform;
} {
  if (platform === ClientPlatformEnum.VK) {
    return {
      clientInfo: clientInfo as ParameterClientInfoActionEvent<Platform>,
      clientPlatform: platform,
    };
  } else if (platform === ClientPlatformEnum.TELEGRAM) {
    return {
      clientInfo: clientInfo as ParameterClientInfoActionEvent<Platform>,
      clientPlatform: platform,
    };
  } else {
    throw new Error('Invalid platform');
  }
}

//
// clientInfo: ParameterClientInfoActionEvent<Platform>;
// clientPlatform: ClientPlatformEnum;
