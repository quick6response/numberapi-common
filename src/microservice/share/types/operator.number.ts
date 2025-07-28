import { Operators } from '@/database/postgres';

export interface OperatorNumber {
  id: Operators['id'];
  name: Operators['name'];
  description: Operators['description'];
  foundingDate: number | null;
  photo: Operators['photo'];
  createdAt: number;
  updatedAt: number;
}
