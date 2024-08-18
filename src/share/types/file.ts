export interface File {
  id: number;

  hash: string;

  name: string;

  fileType: string;

  link: string | null;

  path: string | null;

  storageUpload: string;

  // может не быть
  userId: number | null;

  createdAt: Date;

  updatedAt: Date;
}
