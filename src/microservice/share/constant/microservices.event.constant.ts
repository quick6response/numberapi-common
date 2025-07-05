import { ServiceApiEventsConstant } from '@/microservice/api/constants/service.api.events.constant';
import { NotificationEventConstant } from '@/microservice/notification/constants/notification.event.constant';

/**
 * То какие уведомления можно отравить в очереди событий rabbitmq
 */
export const MicroservicesEventConstant = {
  notification: NotificationEventConstant,
  /**
   * @deprecated Использовать api
   * todo удалить в 2.0.0
   */
  mainServiceApi: ServiceApiEventsConstant,
  api: ServiceApiEventsConstant,
} as const;

/**
 * @deprecated Будет удалено в версии 2.0
 */
export const MainConstantEventName = MicroservicesEventConstant;
