import { FileFormatType, FileStorageType } from '../../constants';

/** Таблица с файлами */
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
