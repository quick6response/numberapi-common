import { NotificationEventConstant } from '@share/constant/notification.event.constant';
import { MainMessageConstant } from '@share/constant/main.message.constant';

/**
 * То какие уведомления можно отравить в очереди событий rabbitmq
 */
export const MicroservicesEventConstant = {
  notification: NotificationEventConstant,
  mainServiceApi: MainMessageConstant,
} as const;

/**
 * @deprecated Будет удалено в версии 2.0
 */
export const MainConstantEventName = MicroservicesEventConstant;
