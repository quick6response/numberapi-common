import { CommentNumberStatus } from '@constant/comment.number.status.constant';

/**
 * Статусы комментариев к номерам
 * @deprecated Будет удалено в версии 2.0.0 Используйте CommentNumberStatus из файла constant
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
  status: CommentNumberStatus;
  createdAt: Date;
  updatedAt: Date;
}
