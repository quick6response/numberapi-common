import { FileFormatType, FileStorageType } from '../../constants';

export interface Files {
  id: number;
  hash: string;
  name: string;
  fileType: FileFormatType;
  link: string | null;
  path: string | null;
  storageUpload: FileStorageType;
  userId: number | null;
  createdAt: Date;
  updatedAt: Date;
}
