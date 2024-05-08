import { ParameterUserEventInterface } from "./paratemeter.user.type";
export type RabbitmqNotificationKeyType = {
    /**
     * Логин пользователя
     */
    auth_login_user: ParameterUserEventInterface & {
        userId: number;
    };
    /**
     * Регистрация
     */
    auth_register_user: ParameterUserEventInterface & {
        userId: number;
    };
    /**
     * Удаление комментария
     */
    comment_delete: ParameterUserEventInterface & {
        commentId: number;
        number: string;
    };
    /**
     * Создание комментария
     */
    comment_create: ParameterUserEventInterface & Required<Pick<any, 'text' | 'number' | 'isAnon'>> & {
        commentId: number;
    };
    /**
     * поиск номера
     */
    number_find: ParameterUserEventInterface & {
        number: string;
        numberId: number;
        isNewNumber: boolean;
        isUpdate?: boolean;
    };
    /**
     * Ошибка поиск номера.
     * TODO: Добавить передачу текста ошибки
     */
    number_find_error: ParameterUserEventInterface & {
        error: unknown;
        number: string;
        isNewNumber?: boolean;
        isUpdate?: boolean;
    };
    /**
     * Создание нового оператора
     */
    operator_create_auto: any;
    /**
     * Поиск номера человека пользователя
     */
    users_number_get: ParameterUserEventInterface & {
        number: string;
        isAnon: boolean;
        isBlock: boolean;
        userId: number;
    };
    /**
     * Добавление организации
     */
    organization_create_system: any;
    /**
     * Обновление организации
     */
    organization_update_system: {
        new: any;
        old: any;
    };
    /**
     * Добавление организации
     */
    organization_create_error_system: {
        message: string | unknown;
    };
    /**
     * Обновление организации
     */
    organization_update_error_system: {
        message: string | unknown;
    };
    /**
     * Прикрепление организации к номеру
     */
    number_organization_pin: {
        number: string;
        organization: any;
    };
    /**
   /**
   * Запуск апи
     */
    service_api_start: {
        date: string;
    };
    /**
     * Остановка сервера
     */
    service_api_stop: {
        date: string;
        signal: string;
    };
    /**
     * Модерация комментария
     */
    comment_moderation_number: {
        infoUserAction: ParameterUserEventInterface;
        comment: {
            commentId: number;
            userId: number;
            text: string;
            isAnon: boolean;
            status: any;
            prevStatus: any;
            createdAt: Date;
            updatedAt: Date;
            userVkId: number;
        };
    };
    /**
     * Уведомление об успешном Оформление подписки
     */
    donut_subscriptionIssuance: {
        userId: number;
        userVkId: number;
        isUser: boolean;
        startDate?: number;
        endDate?: number;
        amount?: number;
        price?: number;
    };
    /**
     * Уведомление об успешном Продление подписки
     */
    donut_subscriptionProlonged: {
        userId: number;
        userVkId: number;
    };
    /**
     * Уведомление о выключение подписки
     */
    donut_subscriptionExpired: {
        userId: number;
        userVkId: number;
    };
    /**
     * Создание пользователя в системе автоматически
     */
    user_create: {
        userVkInfo: {
            lastName: string;
            firstName: string;
            id: number;
        };
        userInfo: {
            donut: boolean;
            id: number;
            role: any;
        };
        reason: string;
    };
    /**
     * Изменение пользователя
     */
    user_edit: {
        preValue: any;
        nextValue: any;
        reason?: string;
    };
};
