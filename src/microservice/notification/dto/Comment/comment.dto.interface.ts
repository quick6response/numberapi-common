import { ParameterClientInfoActionEventAllPlatformInterface } from '@microservice/notification/types/parameter.client.info.type';
import { CommentNumber, NumberEssence } from '@share';
import type { UserDtoInterface } from '../User';

export interface CommentDtoInterface extends Omit<CommentNumber, 'id'> {
  commentId: CommentNumber['id'];
  number: NumberEssence['number'];
}

export interface CommentDeleteDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  comment: CommentDtoInterface;
}

export interface CommentCreateDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  comment: CommentDtoInterface;
}

export type CommentEditChangeColumns = keyof Pick<
  CommentDtoInterface,
  'isAnon' | 'text'
>;

export interface CommentEditDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  prevComment: CommentDtoInterface;
  nextComment: CommentDtoInterface;
  // поля, которые изменились
  changes: CommentEditChangeColumns[];
}

export interface CommentNumberModerateDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  // информация о том кто выполнил действие
  /**
   * @deprecated Используйте поле user
   */
  userInfo?: Omit<UserDtoInterface, 'numberUserId'>;
  // комментарий
  comment: CommentDtoInterface & { prevStatus: CommentDtoInterface['status'] };
  date: number;
}
