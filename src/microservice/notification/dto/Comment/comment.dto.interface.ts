import { ParameterClientInfoActionEventAllPlatform } from '@microservice/notification';
import { CommentNumber, NumberEssence, User } from '@share';
import type { UserDtoInterface } from '../User';

export interface CommentDtoInterface extends Omit<CommentNumber, 'id'> {
  commentId: CommentNumber['id'];
  number: NumberEssence['number'];
}

export type CommentDeleteDto = {
  comment: CommentDtoInterface;
} & ParameterClientInfoActionEventAllPlatform;

export type CommentCreateDto = {
  comment: CommentDtoInterface;
} & ParameterClientInfoActionEventAllPlatform;

export type CommentEditChangeColumns = keyof Pick<
  CommentDtoInterface,
  'isAnon' | 'text'
>;

export type CommentEditDto = {
  prevComment: CommentDtoInterface;
  nextComment: CommentDtoInterface;
  // поля, которые изменились
  changes: CommentEditChangeColumns[];
} & ParameterClientInfoActionEventAllPlatform;

export type CommentNumberModerateDto = {
  // информация о том кто выполнил действие
  /**
   * @deprecated Используйте поле user
   */
  userInfo: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface;
  date: number;
} & ParameterClientInfoActionEventAllPlatform;
