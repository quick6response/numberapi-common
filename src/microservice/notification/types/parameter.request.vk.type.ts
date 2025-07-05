import { ClientPlatform } from '@/microservice/share';
import { ParameterRequestActionInterface } from '@/microservice/notification/types/parameter.request.action.type';

interface VKClientInfoUser {
  vk_access_token_settings: string;
  vk_app_id: number;
  vk_are_notifications_enabled: number;
  vk_is_app_user: number;
  vk_is_favorite: number;
  vk_language: string;
  vk_platform: string;
  vk_ref: string;
  vk_ts: string;
  vk_user_id: number;
  sign: string;
  ip: string;
  userAgent: string;
}

/**
 * Данные приходящие с сервиса АПИ после действия пользователя в системе в ВК
 */
export interface ParameterRequestVkUserEventInterface
  extends ParameterRequestActionInterface<VKClientInfoUser, ClientPlatform.VK> {
  // информация о пользователе из строки запуска и дополнительные параметры
}
