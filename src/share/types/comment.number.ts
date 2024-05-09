/**
 * Статусы комментариев к номерам
 */
export enum CommentStatusEnum {
  // модерация
  MODERATION = 'moderation',
  // отклонено
  DECLINED = 'declined',
  // опубликован
  PUBLISHED = 'published',
  CORRECTING = 'correcting',
}

export interface CommentNumber {
  numberId: number;
  id: number;
  userId: number;
  text: string;
  isAnon: boolean;
  status: CommentStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}
