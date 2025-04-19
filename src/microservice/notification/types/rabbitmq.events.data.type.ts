import { MicroservicesEventConstant } from '@share';
import {
  AuthLoginDto,
  AuthRegistrationDto,
  CommentCreateDto,
  CommentDeleteDto,
  CommentEditDto,
  CommentNumberModerateDto,
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
} from '@microservice/notification/dto';

export type RabbitNotificationEventsKeys =
  keyof typeof MicroservicesEventConstant.notification;

/*
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqNotificationEventsDtoData = {
  /**
   * Авторизация пользователя в ВК
   */
  auth_login_user: AuthLoginDto;
  /**
   * Регистрация пользователя ВК
   */
  auth_register_user: AuthRegistrationDto;
  /**
   * Удаление комментария пользователем
   */
  comment_delete: CommentDeleteDto;
  /**
   * Создание комментария
   */
  comment_create: CommentCreateDto;
  /**
   * Создание комментария
   */
  comment_edit: CommentEditDto;
  /**
   * поиск номера
   */
  number_find: NumberFindDto;
  /**
   * Ошибка поиск номера.
   */
  number_find_error: NumberFindErrorDto;
  /**
   * Создание нового оператора автоматически системой в процессе поиска номеров
   */
  operator_create_auto: OperatorCreateDtoInterface;
  /**
   * Поиск номера телефона пользователя с привязанными номером и активированными уведомлениями
   */
  user_another_number_find: UserAnotherFindNumberDtoInterface;

  /**
   * Добавление организации
   */
  organization_create_system: OrganizationCreateDtoInterface;
  /**
   * Обновление информации об организации
   */
  organization_update_system: OrganizationUpdateDtoInterface;
  /**
   * Добавление организации
   */
  organization_create_system_error: OrganizationCreateErrorDtoInterface;
  /**
   * Обновление организации
   */
  organization_update_error: OrganizationUpdateErrorDtoInterface;
  /**
   * Прикрепление организации к номеру
   */
  number_organization_pin: NumberOrganizationPinDto;
  /**
   * Запуск сервиса АПИ
   */
  service_api_start: { date: number };
  /**
   * Остановка сервиса АПИ
   */
  service_api_stop: { date: number; signal: string };
  /**
   * Модерация комментария
   */
  comment_moderation_number: CommentNumberModerateDto;
  /**
   * Обратное уведомление об успешном Оформление подписки в сервисе
   */
  donut_subscriptionIssuance: DonutSubscriptionIssuanceDtoInterface;
  /**
   * Уведомление об успешном Продление подписки
   */
  donut_subscriptionProlonged: DonutSubscriptionProlongedDtoInterface;

  /**
   * Уведомление о выключение подписки
   */
  donut_subscriptionExpired: DonutSubscriptionExpiredDtoInterface;

  /**
   * Создание пользователя в системе автоматически
   */
  user_create: UserCreateDtoInterface;

  /**
   * Изменение пользователя
   */
  user_edit: UserUpdateDtoInterface;

  /**
   * Привязка оператора к оператору из системы интеграции
   */
  operator_bind_integration: OperatorBindIntegrationDtoInterface;

  /**
   * Крон задача успешно завершила обновление номера
   */
  number_schedule_updated_success: NumberScheduleUpdatedSuccessDto;

  /**
   * Крон задача обновление номера завершилась с ошибкой
   */
  number_schedule_updated_error: NumberScheduleUpdatedErrorDto;

  /**
   * Крон задача обновления номеров завершена
   */
  number_schedule_updated_summary: NumberScheduleUpdatedSummaryDto;

  /**
   * Крон задача успешно завершила добавление номера
   */
  number_schedule_created_success: NumberScheduleCreatedSuccessDto;

  /**
   * Крон задача добавления номера завершилась с ошибкой
   */
  number_schedule_created_error: NumberScheduleCreatedErrorDto;
};
