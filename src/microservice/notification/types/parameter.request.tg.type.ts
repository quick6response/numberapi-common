import { ClientPlatform } from '@share';
import { ParameterRequestActionInterface } from '@microservice/notification/types/parameter.request.action.type';

interface TGClientInfoUser {
  tg_user_id: number;
  ip: string;
  userAgent: string;
}

/**
 * Данные приходящие с сервиса АПИ после действия пользователя в системе в ВК
 */
export interface ParameterRequestTelegramUserEventInterface
  extends ParameterRequestActionInterface<
    TGClientInfoUser,
    ClientPlatform.TELEGRAM
  > {}
