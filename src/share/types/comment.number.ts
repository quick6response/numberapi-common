import { CommentNumberStatus } from '@share/constant';

export interface CommentNumber {
  numberId: number;
  id: number;
  userId: number;
  text: string;
  isAnon: boolean;
  status: CommentNumberStatus;
  createdAt: Date;
  updatedAt: Date;
}
