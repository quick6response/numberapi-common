import { ClientPlatform, User } from '@/microservice/share';

/**
 * Данные о пользователе приходящие с сервиса АПИ после действия
 */
export interface ParameterRequestActionInterface<
  TypeClientInfo,
  TypeClientPlatform extends ClientPlatform,
> {
  // информация о пользователе из строки запуска и дополнительные параметры
  clientInfo: TypeClientInfo;
  clientPlatform: TypeClientPlatform;
  user?: User;
  date: number;
}
