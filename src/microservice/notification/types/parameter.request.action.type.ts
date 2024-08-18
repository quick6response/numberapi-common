import { User, ClientPlatform } from '@share';

/**
 * Данные о пользователе приходящие с сервиса АПИ после действия
 */
export interface ParameterRequestActionInterface<
  TypeClientInfo,
  TypeClientPlatform extends ClientPlatform,
> {
  // информация о пользователе из строки запуска и дополнительные параметры
  /**
   * @deprecated Используйте client.info
   * // todo будет удалено в версии 2.0.0
   */
  clientInfo: TypeClientInfo;
  /**
   * @deprecated Используйте client.platform
   * // todo будет удалено в версии 2.0.0
   */
  clientPlatform: TypeClientPlatform;
  /**
   * Информация о клиенте от кого идет действие
   */
  client?: {
    info: TypeClientInfo;
    platform: TypeClientPlatform;
  };
  user?: User;
  date: number;
}
