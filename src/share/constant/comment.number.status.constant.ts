/**
 * Статусы комментариев к номерам
 */
export enum CommentNumberStatus {
  // модерация
  MODERATION = 1,
  // отклонено
  DECLINED = 2,
  // опубликован
  PUBLISHED = 3,
  // требует исправления
  CORRECTING = 4,
}
