/**
 * Отправители событий
 */
export const RabbitmqExchangesConstant = {
  // микросервис уведомлений проекта
  notification: 'vk_notification_exchanges',
  // микросервис главного АПИ проекта
  mainServiceApi: 'service_api_exchanges',
  // оплата подписки вк донут
  vkPayment: 'vk_payment_exchanges',
} as const;
