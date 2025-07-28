import { NumberFactSource, NumberFactType } from '../../constants';

/** Таблица фактов номеров */
export interface NumbersFacts {
  numberId: number;
  userId: number | null;
  type: NumberFactType;
  sourceType: NumberFactSource | null;
  createdAt: Date;
  updatedAt: Date;
}
