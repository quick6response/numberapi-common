import type { ParameterClientInfoActionEventAllPlatformInterface } from '@/microservice/notification/types/parameter.client.info.type';
import type { NumberComment, NumberEssence } from '@/microservice/share';

/** Информация о комментарии */
export interface NumberCommentDtoInterface extends Omit<NumberComment, 'id'> {
  commentId: NumberComment['id'];
  number: NumberEssence['number'];
}

export interface NumberCommentDeletedDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  comment: {
    id: NumberComment['id'];
    isAnon: NumberComment['isAnon'];
    text: NumberComment['text'];
    status: NumberComment['status'];
    createdAt: NumberComment['createdAt'];
    updatedAt: NumberComment['updatedAt'];
  };
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
}

export interface NumberCommentCreatedDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  comment: {
    id: NumberComment['id'];
    isAnon: NumberComment['isAnon'];
    text: NumberComment['text'];
    createdAt: NumberComment['createdAt'];
  };
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
}

export type NumberCommentEditChangeFields = keyof Pick<
  NumberComment,
  'isAnon' | 'text'
>;

export interface NumberCommentEditedDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  commentId: NumberComment['id'];
  number: {
    number: NumberEssence['number'];
    numberId: NumberEssence['id'];
  };
  previousComment: {
    isAnon: NumberComment['isAnon'];
    text: NumberComment['text'];
  };
  updatedComment: {
    isAnon: NumberComment['isAnon'];
    text: NumberComment['text'];
  };
  // поля, которые изменились
  changes: NumberCommentEditChangeFields[];
}

export interface NumberCommentModeratedDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  // комментарий
  comment: NumberCommentDtoInterface & {
    prevStatus: NumberCommentDtoInterface['status'];
  };
  date: number;
}
