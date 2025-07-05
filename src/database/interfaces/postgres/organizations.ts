export interface Organizations {
  id: number;
  name: string;
  photo: string | null;
  site: string | null;
  description: string | null;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
}
