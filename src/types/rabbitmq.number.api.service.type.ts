import { ParameterRequestVkUserEventInterface } from './parameter.request.vk.type';

enum CommentStatusEnum {
  // модерация
  MODERATION = 'moderation',
  // отклонено
  DECLINED = 'declined',
  // опубликован
  PUBLISHED = 'published',
  CORRECTING = 'correcting',
}

export enum UserRoleEnum {
  User = 'user',
  Admin = 'admin',
  Donut = 'donut',
  Helper = 'helper',
}

type UserSystem = {
  id: number;
  idVk: number;
  lastName: string;
  firstName: string;
  donut: boolean;
  admin: boolean;
  numberUserId: number;
  role: UserRoleEnum;
};

type CommentNumber = {
  commentId: number;
  userId: number;
  text: string;
  isAnon: boolean;
  status: CommentStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  userVkId: number;
};

type Organization = {
  id: number;
  name: string;
  photo: string;
  site: string;
};

interface Operator {
  name: string;
  photo: string;
  description?: string;
  foundingDate?: string;
}

/**
 * События, которые принимает микросервис по работе с уведомлениями
 */
export type RabbitmqNotificationEventType = {
  /**
   * Авторизация пользователя в ВК
   */
  auth_login_user: ParameterRequestVkUserEventInterface & { userId: number };
  /**
   * Регистрация пользователя ВК
   */
  auth_register_user: ParameterRequestVkUserEventInterface & { userId: number };

  /**
   * Удаление комментария
   */
  comment_delete: ParameterRequestVkUserEventInterface & CommentNumber;

  /**
   * Создание комментария
   */
  comment_create: ParameterRequestVkUserEventInterface & CommentNumber;

  /**
   * поиск номера
   */
  number_find: ParameterRequestVkUserEventInterface & {
    number: string;
    numberId: number;
    isNewNumber: boolean;
    isUpdate?: boolean;
    userId: number;
  };
  /**
   * Ошибка поиск номера.
   * TODO: Добавить передачу текста ошибки
   */
  number_find_error: ParameterRequestVkUserEventInterface & {
    errorText: unknown;
    number: string;
    isNewNumber?: boolean;
    isUpdate?: boolean;
    userId: number;
  };

  /**
   * Создание нового оператора
   */
  operator_create_auto: {
    operator: Operator;
    date: number;
  };

  /**
   * Поиск номера телефона пользователя с привязанными номером и активированными уведомлениями
   */
  user_another_number_find: {
    // номер, который вызвал триггер с привязкой
    number: string;
    numberId: number;
    isAnon: boolean;
    isBlock: boolean;
    // айди пользователя чей номер телефона
    userId: number;
    userVkId: number;
    date: number;
  };

  /**
   * Добавление организации
   */
  organization_create_system: {
    organization: Organization;
    date: number;
  };
  /**
   * Обновление информации об организации
   */
  organization_update_system: {
    new: Organization;
    old: Organization;
    date: number;
  };

  /**
   * Добавление организации
   */
  organization_create_error_system: {
    message: string | unknown;
    date: number;
  };

  /**
   * Обновление организации
   */
  organization_update_error_system: {
    message: string | unknown;
    date: number;
  };

  /**
   * Прикрепление организации к номеру
   */
  number_organization_pin: {
    number: string;
    numberId: number;
    organization: Organization;
    date: number;
  };

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
  comment_moderation_number: {
    // информация о том кто выполнил действие
    infoUserAction: ParameterRequestVkUserEventInterface;
    // комментарий
    comment: CommentNumber;
    date: number;
  };

  /**
   * Обратное уведомление об успешном Оформление подписки в сервисе
   */
  donut_subscriptionIssuance: {
    userId: number;
    userVkId: number;
    // был ли пользователь в системе
    isUser: boolean;
    // дата начала подписки
    startDate?: number;
    // дата окончания подписки
    endDate?: number;
    // сумма подписки
    amount?: number;
    // цена подписки за месяц
    price?: number;
    date: number;
  };

  /**
   * Уведомление об успешном Продление подписки
   */
  donut_subscriptionProlonged: {
    userId: number;
    userVkId: number;
    date: number;
  };

  /**
   * Уведомление о выключение подписки
   */
  donut_subscriptionExpired: { userId: number; userVkId: number; date: number };

  /**
   * Создание пользователя в системе автоматически
   */
  user_create: {
    // информация о пользователя полученная из ВК
    userVkInfo: { lastName: string; firstName: string; id: number };
    // информация в системе о созданном пользователе
    userInfo: UserSystem;
    reason: string;
    date: number;
  };

  /**
   * Изменение пользователя
   */
  user_edit: {
    preValue: UserSystem;
    nextValue: UserSystem;
    date: number;
    reason?: string;
  };
};
