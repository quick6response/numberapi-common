export interface OperatorDtoInterface {
  id: number;
  name: string;
  photo: string;
  description?: string;
  foundingDate?: string;
}

export interface OperatorCreateDtoInterface {
  date: number;
  operator: OperatorDtoInterface;
}

// todo рассмотреть вариант с уведомлением о изменение операторов, если такие могу быть
