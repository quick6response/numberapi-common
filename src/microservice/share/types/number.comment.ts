import { NumberCommentStatus } from '../../../database/constants';

export interface NumberComment {
  id: number;
  numberId: number;
  userId: number;
  text: string;
  isAnon: boolean;
  status: NumberCommentStatus;
  createdAt: number;
  updatedAt: number;
}
