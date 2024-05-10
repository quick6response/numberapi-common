import {
  ParameterRequestVkUserEventInterface,
  ParameterClientInfoActionEventAllPlatform,
} from '@microservice/notification';
import { CommentNumber, NumberEssence, User } from '@share';
import type { UserDtoInterface } from '../User';

export interface CommentDtoInterface extends Omit<CommentNumber, 'id'> {
  commentId: CommentNumber['id'];
  number: NumberEssence['number'];
}

export interface CommentDeleteDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  comment: CommentDtoInterface;
}

export interface CommentCreateDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  comment: CommentDtoInterface;
}

export type CommentEditChangeColumns = keyof Pick<
  CommentDtoInterface,
  'isAnon' | 'text'
>;

export interface CommentEditDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  prevComment: CommentDtoInterface;
  nextComment: CommentDtoInterface;
  // поля, которые изменились
  changes: CommentEditChangeColumns[];
}

export interface CommentNumberModerateDtoInterface
  extends ParameterClientInfoActionEventAllPlatform {
  // информация о том кто выполнил действие
  userInfo: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface;
  date: number;
}
