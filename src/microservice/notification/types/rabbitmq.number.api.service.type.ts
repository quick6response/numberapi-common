import { MainConstantEventName } from '../../../constant';
import {
  AuthLoginDtoInterface,
  AuthRegistrationDtoInterface,
  CommentCreateDtoInterface,
  CommentDeleteDtoInterface,
  CommentNumberModerateDtoInterface,
  DonutSubscriptionExpiredDtoInterface,
  DonutSubscriptionIssuanceDtoInterface,
  DonutSubscriptionProlongedDtoInterface,
  NumberFindDtoInterface,
  NumberFindErrorDtoInterface,
  NumberOrganizationPinDtoInterface,
  OperatorCreateDtoInterface,
  OrganizationCreateDtoInterface,
  OrganizationCreateErrorDtoInterface,
  OrganizationUpdateDtoInterface,
  OrganizationUpdateErrorDtoInterface,
  UserAnotherFindNumberDtoInterface,
  UserCreateDtoInterface,
  UserUpdateDtoInterface,
} from '../dto';

export type RabbitmqNotificationEventKey =
  keyof typeof MainConstantEventName.notification;

/**
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqNotificationEvents = {
  /**
   * Авторизация пользователя в ВК
   */
  auth_login_user: AuthLoginDtoInterface;
  /**
   * Регистрация пользователя ВК
   */
  auth_register_user: AuthRegistrationDtoInterface;

  /**
   * Удаление комментария пользователем
   */
  comment_delete: CommentDeleteDtoInterface;

  /**
   * Создание комментария
   */
  comment_create: CommentCreateDtoInterface;

  /**
   * поиск номера
   */
  number_find: NumberFindDtoInterface;

  /**
   * Ошибка поиск номера.
   */
  number_find_error: NumberFindErrorDtoInterface;

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
  organization_create_error_system: OrganizationCreateErrorDtoInterface;

  /**
   * Обновление организации
   */
  organization_update_error_system: OrganizationUpdateErrorDtoInterface;

  /**
   * Прикрепление организации к номеру
   */
  number_organization_pin: NumberOrganizationPinDtoInterface;

  /**
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
  comment_moderation_number: CommentNumberModerateDtoInterface;

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
};
