/**
 * Иногда данные с сервисов о пользователе ВК могут приходить от него и будут в таком формате. Тип можно расширить, но сейчас его хватает
 */
export interface UserVk {
  id: number;
  lastName: string;
  firstName: string;
}
