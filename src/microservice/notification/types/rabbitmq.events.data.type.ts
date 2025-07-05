import { NotificationEventConstant } from '@/microservice/notification';
import { MicroservicesEventConstant } from '@/microservice/share';
import {
  AuthLoginDto,
  AuthRegistrationDto,
  NumberCommentCreatedDto,
  NumberCommentDeletedDto,
  NumberCommentEditedDto,
  NumberCommentModeratedDto,
  DonutSubscriptionExpiredDtoInterface,
  DonutSubscriptionIssuanceDtoInterface,
  DonutSubscriptionProlongedDtoInterface,
  NumberFindDto,
  NumberFindErrorDto,
  NumberOrganizationPinDto,
  NumberScheduleCreatedErrorDto,
  NumberScheduleCreatedSuccessDto,
  NumberScheduleUpdatedErrorDto,
  NumberScheduleUpdatedSuccessDto,
  NumberScheduleUpdatedSummaryDto,
  OperatorBindIntegrationDtoInterface,
  OperatorCreateDtoInterface,
  OrganizationCreateDtoInterface,
  OrganizationCreateErrorDtoInterface,
  OrganizationUpdateDtoInterface,
  OrganizationUpdateErrorDtoInterface,
  UserAnotherFindNumberDtoInterface,
  UserCreateDtoInterface,
  UserUpdateDtoInterface,
} from '@/microservice/notification/dto';

export type RabbitNotificationEventsKeys =
  keyof typeof MicroservicesEventConstant.notification;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqNotificationEventsDtoData = {
  /**
   * Авторизация пользователя в ВК
   */
  [NotificationEventConstant.auth_login_user]: AuthLoginDto;

  /**
   * Регистрация пользователя ВК
   */
  [NotificationEventConstant.auth_register_user]: AuthRegistrationDto;

  /**
   * Удаление комментария пользователем
   */
  [NotificationEventConstant.number_comment_delete]: NumberCommentDeletedDto;

  /**
   * Создание комментария
   */
  [NotificationEventConstant.number_comment_create]: NumberCommentCreatedDto;

  /**
   * Создание комментария
   */
  [NotificationEventConstant.number_comment_edit]: NumberCommentEditedDto;

  /**
   * Модерация комментария
   */
  [NotificationEventConstant.number_comment_moderation_number]: NumberCommentModeratedDto;

  /**
   * поиск номера
   */
  [NotificationEventConstant.number_find]: NumberFindDto;

  /**
   * Ошибка поиск номера.
   */
  [NotificationEventConstant.number_find_error]: NumberFindErrorDto;

  /**
   * Создание нового оператора автоматически системой в процессе поиска номеров
   */
  [NotificationEventConstant.operator_create_auto]: OperatorCreateDtoInterface;

  /**
   * Поиск номера телефона пользователя с привязанными номером и активированными уведомлениями
   */
  [NotificationEventConstant.user_another_number_find]: UserAnotherFindNumberDtoInterface;

  /**
   * Добавление организации
   */
  [NotificationEventConstant.organization_create_system]: OrganizationCreateDtoInterface;

  /**
   * Обновление информации об организации
   */
  [NotificationEventConstant.organization_update_system]: OrganizationUpdateDtoInterface;

  /**
   * Добавление организации
   */
  [NotificationEventConstant.organization_create_system_error]: OrganizationCreateErrorDtoInterface;

  /**
   * Обновление организации
   */
  [NotificationEventConstant.organization_update_error]: OrganizationUpdateErrorDtoInterface;

  /**
   * Прикрепление организации к номеру
   */
  [NotificationEventConstant.number_organization_pin]: NumberOrganizationPinDto;

  /**
   * Запуск сервиса АПИ
   */
  [NotificationEventConstant.service_api_start]: { date: number };

  /**
   * Остановка сервиса АПИ
   */
  [NotificationEventConstant.service_api_stop]: {
    date: number;
    signal: string;
  };

  /**
   * Обратное уведомление об успешном Оформление подписки в сервисе
   */
  [NotificationEventConstant.donut_subscriptionIssuance]: DonutSubscriptionIssuanceDtoInterface;

  /**
   * Уведомление об успешном Продление подписки
   */
  [NotificationEventConstant.donut_subscriptionProlonged]: DonutSubscriptionProlongedDtoInterface;

  /**
   * Уведомление о выключение подписки
   */
  [NotificationEventConstant.donut_subscriptionExpired]: DonutSubscriptionExpiredDtoInterface;

  /**
   * Создание пользователя в системе автоматически
   */
  [NotificationEventConstant.user_create]: UserCreateDtoInterface;

  /**
   * Изменение пользователя
   */
  [NotificationEventConstant.user_edit]: UserUpdateDtoInterface;

  /**
   * Привязка оператора к оператору из системы интеграции
   */
  [NotificationEventConstant.operator_bind_integration]: OperatorBindIntegrationDtoInterface;

  /**
   * Крон задача успешно завершила обновление номера
   */
  [NotificationEventConstant.number_schedule_updated_success]: NumberScheduleUpdatedSuccessDto;

  /**
   * Крон задача обновление номера завершилась с ошибкой
   */
  [NotificationEventConstant.number_schedule_updated_error]: NumberScheduleUpdatedErrorDto;

  /**
   * Крон задача обновления номеров завершена
   */
  [NotificationEventConstant.number_schedule_updated_summary]: NumberScheduleUpdatedSummaryDto;

  /**
   * Крон задача успешно завершила добавление номера
   */
  [NotificationEventConstant.number_schedule_created_success]: NumberScheduleCreatedSuccessDto;

  /**
   * Крон задача добавления номера завершилась с ошибкой
   */
  [NotificationEventConstant.number_schedule_created_error]: NumberScheduleCreatedErrorDto;
};
