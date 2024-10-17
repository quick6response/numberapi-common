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
  comment_delete: 'comment_delete',

  /**
   * Создание комментария
   */
  comment_create: 'comment_create',

  /**
   * Изменение комментария
   */
  comment_edit: 'comment_edit',

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
   * Модерация комментария
   */
  comment_moderation_number: 'comment_moderation_number',

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
} as const;
