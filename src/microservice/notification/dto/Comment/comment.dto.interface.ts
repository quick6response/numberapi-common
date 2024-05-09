import type { ParameterRequestVkUserEventInterface } from '@main/types';
import { CommentNumber, NumberEssence, User } from '@share/types';
import type { UserDtoInterface } from '../User';

export interface CommentDtoInterface extends Omit<CommentNumber, 'id'> {
  commentId: CommentNumber['id'];
  number: NumberEssence['number'];
  userVkId: User['vkId'];
}

export interface CommentDeleteDtoInterface
  extends ParameterRequestVkUserEventInterface {
  comment: CommentDtoInterface;
}

export interface CommentCreateDtoInterface
  extends ParameterRequestVkUserEventInterface {
  comment: CommentDtoInterface;
}

export type CommentEditChangeColumns = keyof Pick<
  CommentDtoInterface,
  'isAnon' | 'text'
>;

export interface CommentEditDtoInterface
  extends ParameterRequestVkUserEventInterface {
  prevComment: CommentDtoInterface;
  nextComment: CommentDtoInterface;
  // поля, которые изменились
  changes: CommentEditChangeColumns[];
}

export interface CommentNumberModerateDtoInterface
  extends ParameterRequestVkUserEventInterface {
  // информация о том кто выполнил действие
  userInfo: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface;
  date: number;
}
