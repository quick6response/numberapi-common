export interface DonutCreateDtoInterface {
  userId: number;
  amount: number;
  amountWithoutFee: number;
  json: NonNullable<unknown>;
}

export interface DonutProlongedDtoInterface {
  userId: number;
  json: NonNullable<unknown>;
}

export interface DonutExpiredDtoInterface {
  userId: number;
  json: NonNullable<unknown>;
}

export interface DonutPriceChangeDtoInterface {
  userId: number;
  oldAmount: number;
  newAmount: number;
  diffAmount: number;
  diffAmountWithoutFee: number;
  json: NonNullable<unknown>;
}

export interface DonutCancelDtoInterface {
  userId: number;
  json: NonNullable<unknown>;
}
