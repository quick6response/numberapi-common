import { ClientPlatformEnum } from '@constant/platform.constant';
import { ParameterRequestActionInterface } from '@microservice/notification/types/parameter.request.action.type';

interface ClientInfoTg {
  tg_user_id: number;
  ip: string;
  userAgent: string;
}

/**
 * Данные приходящие с сервиса АПИ после действия пользователя в системе в ВК
 */
export interface ParameterRequestTelegramUserEventInterface
  extends ParameterRequestActionInterface<
    ClientInfoTg,
    ClientPlatformEnum.TELEGRAM
  > {
  // информация о пользователе из строки запуска и дополнительные параметры
}
