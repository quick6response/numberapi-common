import { NumberCommentStatus } from '../../constants';

/** Таблица комментариев к номерам */
export interface NumbersComments {
  id: number;
  text: string;
  ip: string | null;
  status: NumberCommentStatus;
  isAnon: boolean;
  userId: number;
  numberId: number;
  createdAt: Date;
  updatedAt: Date;
}
