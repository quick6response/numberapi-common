/** Статус поиска номера */
export enum NumberSearchUserStatus {
  // начало поиска
  PENDING = 'pending',
  // поиск успешный
  SUCCESS = 'success',
  // поиск неудачный
  ERROR = 'error',
}

export default NumberSearchUserStatus;
