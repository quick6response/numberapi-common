export enum NumberSearchUserStatus {
  // начало поиска
  Pending = 'pending',
  // возникла ошибка во время поиска
  Rejected = 'rejected',
  // поиск успешный
  Success = 'success',
  // ошибка возникла до запуска поиска
  Error = 'error',
}

export default NumberSearchUserStatus;
