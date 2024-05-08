import type { ParameterRequestVkUserEventInterface } from '../../types';
import { UserDtoInterface } from '../User';

enum CommentStatusEnum {
  // модерация
  MODERATION = 'moderation',
  // отклонено
  DECLINED = 'declined',
  // опубликован
  PUBLISHED = 'published',
  CORRECTING = 'correcting',
}

export interface CommentDtoInterface {
  commentId: number;
  userId: number;
  text: string;
  isAnon: boolean;
  status: CommentStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  userVkId: number;
}

export interface CommentDeleteDtoInterface
  extends ParameterRequestVkUserEventInterface,
    CommentDtoInterface {}

export interface CommentCreateDtoInterface
  extends ParameterRequestVkUserEventInterface,
    CommentDtoInterface {}

export interface CommentNumberModerateDtoInterface {
  // информация о том кто выполнил действие
  userInfo: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface;
  date: number;
}
