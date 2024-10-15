export interface DonutCreateDtoInterface {
  userId: number;
  amount: number;
  amountWithoutFee: number;
  json: NonNullable<unknown>;
}

export interface DonutProlongedInterface {
  userId: number;
  json: NonNullable<unknown>;
}

export interface DonutExpiredInterface {
  userId: number;
  json: NonNullable<unknown>;
}
