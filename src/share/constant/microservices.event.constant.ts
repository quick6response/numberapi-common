import { NotificationEventConstant } from './notification.event.constant';

/**
 * То какие уведомления можно отравить в очереди событий rabbitmq
 */
export const MicroservicesEventConstant = {
  notification: NotificationEventConstant,
  mainServiceApi: {},
} as const;

/**
 * @deprecated Будет удалено в версии 2.0
 */
export const MainConstantEventName = MicroservicesEventConstant;
