import type { ParameterRequestTelegramUserEventInterface } from '@microservice/notification/types/parameter.request.tg.type';
import type { ParameterRequestVkUserEventInterface } from '@microservice/notification/types/parameter.request.vk.type';
import { ClientPlatform, User } from '@share';

// множество разных интерфейсов, которые написаны под разные платформы

// todo понять как тут использовать разные платформы и побороть ошибки типизации в сервисе АПИ
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
export type ParameterClientInfoActionEvent<Platform extends ClientPlatform> =
  Platform extends ClientPlatform.VK
    ? ParameterRequestVkUserEventInterface['clientInfo']
    : Platform extends ClientPlatform.TELEGRAM
      ? ParameterRequestTelegramUserEventInterface['clientInfo']
      : //   : Platform extends ClientPlatformEnum.ODNOKLASSNIKI
        //   ? // Добавьте здесь тип для ODNOKLASSNIKI
        //   : Platform extends ClientPlatformEnum.WEB
        //   ? // Добавьте здесь тип для WEB
        never;

export function getClientInfoByPlatform<Platform extends ClientPlatform>(
  platform: Platform,
  clientInfo: ParameterClientInfoActionEventAllPlatformInterface['clientInfo'],
): {
  clientInfo: ParameterClientInfoActionEvent<Platform>;
  clientPlatform: Platform;
} {
  if (platform === ClientPlatform.VK) {
    return {
      clientInfo: clientInfo as ParameterClientInfoActionEvent<Platform>,
      clientPlatform: platform,
    };
  } else if (platform === ClientPlatform.TELEGRAM) {
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
