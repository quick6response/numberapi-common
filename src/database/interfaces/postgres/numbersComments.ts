import { NumberCommentStatus } from '../../constants';

export interface NumbersComments {
  id: number;
  text: string;
  ip: string;
  status: NumberCommentStatus;
  isAnon: boolean;
  userId: number;
  numberId: number;
  createdAt: Date;
  updatedAt: Date;
}
