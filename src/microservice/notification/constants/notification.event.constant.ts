export const NotificationEventConstant = {
  /**
   * Авторизация пользователя в ВК
   */
  auth_login_user: 'auth_login_user',

  /**
   * Регистрация пользователя ВК
   */
  auth_register_user: 'auth_register_user',

  /**
   * Удаление комментария пользователем
   */
  number_comment_delete: 'number_comment_delete',

  /**
   * Создание комментария
   */
  number_comment_create: 'number_comment_create',

  /**
   * Изменение комментария
   */
  number_comment_edit: 'number_comment_edit',

  /**
   * Модерация комментария
   */
  number_comment_moderation: 'number_comment_moderation',

  /**
   * поиск номера
   */
  number_find: 'number_find',

  /**
   * Ошибка поиск номера.
   */
  number_find_error: 'number_find_error',

  /**
   * Создание нового оператора автоматически системой в процессе поиска номеров
   */
  operator_create_auto: 'operator_create_auto',

  /**
   * Поиск номера телефона пользователя с привязанными номером и активированными уведомлениями
   */
  user_another_number_find: 'user_another_number_find',

  /**
   * Добавление организации
   */
  organization_create_system: 'organization_create_system',

  /**
   * Обновление информации об организации
   */
  organization_update_system: 'organization_update_system',

  /**
   * Добавление организации
   */
  organization_create_system_error: 'organization_create_system_error',

  /**
   * Обновление организации
   */
  organization_update_error: 'organization_update_error',

  /**
   * Прикрепление организации к номеру
   */
  number_organization_pin: 'number_organization_pin',

  /**
   /**
   * Запуск сервиса АПИ
   */
  service_api_start: 'service_api_start',

  /**
   * Остановка сервиса АПИ
   */
  service_api_stop: 'service_api_stop',

  /**
   * Обратное уведомление об успешном Оформление подписки в сервисе
   */
  donut_subscriptionIssuance: 'donut_subscriptionIssuance',

  /**
   * Уведомление об успешном Продление подписки
   */
  donut_subscriptionProlonged: 'donut_subscriptionProlonged',

  /**
   * Уведомление о выключение подписки
   */
  donut_subscriptionExpired: 'donut_subscriptionExpired',

  /**
   * Создание пользователя в системе автоматически
   */
  user_create: 'user_create',

  /**
   * Изменение пользователя
   */
  user_edit: 'user_edit',

  /**
   * Привязка оператора к оператору из системы интеграции
   */
  operator_bind_integration: 'operator_bind_integration',

  /**
   * Крон задача успешно завершила обновление номера
   */
  number_schedule_updated_success: 'number_schedule_updated_success',

  /**
   * Крон задача обновление номера завершилась с ошибкой
   */
  number_schedule_updated_error: 'number_schedule_updated_error',

  /**
   * Крон задача успешно завершила обновление номеров
   */
  number_schedule_updated_summary: 'number_schedule_updated_summary',

  /**
   * Крон задача успешно завершила добавление номера
   */
  number_schedule_created_success: 'number_schedule_created_success',

  /**
   * Крон задача добавления номера завершилась с ошибкой
   */
  number_schedule_created_error: 'number_schedule_created_error',
} as const;
