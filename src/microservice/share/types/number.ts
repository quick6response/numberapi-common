import { Numbers } from '@/database/postgres';

export interface NumberEssence {
  id: Numbers['id'];
  number: Numbers['number'];
  createdAt: number;
  updatedAt: number;
}
