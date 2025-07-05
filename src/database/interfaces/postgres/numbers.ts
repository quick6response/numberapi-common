import { NumberFrequencyLevel } from '../../constants';

/** Таблица номеров */
export interface Numbers {
  id: number;
  number: string;
  createdAt: Date;
  updatedAt: Date;
  updatedInfoAt: Date;
  isInvalidNumber: boolean;
  checkCount: number;
  updateCount: number;
  frequencyLevel: NumberFrequencyLevel;
  nextCheckAt: Date;
}
