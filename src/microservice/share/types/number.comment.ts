import { NumbersComments } from '@/database/postgres';

export interface NumberComment {
  id: NumbersComments['id'];
  numberId: NumbersComments['numberId'];
  userId: NumbersComments['userId'];
  text: NumbersComments['text'];
  isAnon: NumbersComments['isAnon'];
  status: NumbersComments['status'];
  createdAt: number;
  updatedAt: number;
}
