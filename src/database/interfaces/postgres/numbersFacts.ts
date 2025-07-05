import { NumberFactSource, NumberFactType } from '../../constants';

export interface NumbersFacts {
  numberId: number;
  userId: number | null;
  type: NumberFactType;
  sourceType: NumberFactSource | null;
  createdAt: Date;
  updatedAt: Date;
}
