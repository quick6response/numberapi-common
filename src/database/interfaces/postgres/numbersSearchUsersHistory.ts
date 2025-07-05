export interface NumbersSearchUsersHistory {
  id: number;
  agent: string;
  ip: string;
  operatorId: number;
  numberId: number;
  userId: number;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
}
