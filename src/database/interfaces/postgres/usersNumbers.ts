export interface UsersNumbers {
  id: number;
  numberId: number;
  isPrivate: boolean;
  isNotification: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
