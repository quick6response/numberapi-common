import { ClientPlatformEnum } from '@constant/platform.constant';
import { User } from '@share';

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
