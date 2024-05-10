import { User } from '@share';

export enum ClientPlatformEnum {
  VK = 'vk',
  VK_BOT = 'vk_bot',
  TELEGRAM = 'telegram',
  ODNOKLASSNIKI = 'odnoklassniki',
  WEB = 'web',
}

/**
 * Данные приходящие с сервиса АПИ после действия
 */
export interface ParameterRequestActionInterface<
  TypeClientInfo,
  TypeClientPlatform extends ClientPlatformEnum,
> {
  // информация о пользователе из строки запуска и дополнительные параметры
  clientInfo: TypeClientInfo;
  clientPlatform: TypeClientPlatform;
  user?: User;
  date: number;
}
