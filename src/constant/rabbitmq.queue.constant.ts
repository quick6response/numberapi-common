export const RabbitmqQueueConstant = {
  // микросервис уведомлений проекта
  notification: 'vk_notification_queue',
  // микросервис главного АПИ проекта
  mainServiceApi: 'vk_main_service_api_queue',
} as const;

/**
 * @deprecated Будет удалено в версии 2.0
 */
export const RabbitmqQueueConfig = RabbitmqQueueConstant;
