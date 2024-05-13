export const RabbitmqQueueConfig = {
  // микросервис уведомлений проекта
  notification: 'vk_notification_queue',
  // микросервис главного АПИ проекта
  mainServiceApi: 'vk_main_service_api_queue',
} as const;
