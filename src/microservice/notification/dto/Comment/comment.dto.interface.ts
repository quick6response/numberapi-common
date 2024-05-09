import type { ParameterRequestVkUserEventInterface } from '@main/types';
import { CommentNumber, NumberEssence, User } from '@share/types';
import type { UserDtoInterface } from '../User';

export interface CommentDtoInterface extends Omit<CommentNumber, 'id'> {
  commentId: CommentNumber['id'];
  number: NumberEssence['number'];
  userVkId: User['vkId'];
}

export interface CommentDeleteDtoInterface
  extends ParameterRequestVkUserEventInterface,
    CommentDtoInterface {}

export interface CommentCreateDtoInterface
  extends ParameterRequestVkUserEventInterface,
    CommentDtoInterface {}

export interface CommentNumberModerateDtoInterface
  extends ParameterRequestVkUserEventInterface {
  // информация о том кто выполнил действие
  userInfo: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface;
  date: number;
}
