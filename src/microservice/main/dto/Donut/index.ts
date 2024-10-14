export interface DonutCreateDtoInterface {
  userId: number;
  amount: number;
  amountWithoutFee: number;
  json: string;
}

export interface DonutProlongedInterface {
  userId: number;
  json: string;
}

export interface DonutExpiredInterface {
  userId: number;
  json: string;
}
