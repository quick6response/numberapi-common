import { FileFormatType, FileStorageType } from '../../constants';

/** Таблица с разрешением на загрузку файлов */
export interface FilesAssessUpdates {
  id: number;
  hash: string;
  folder: string;
  maxCountFileUpload: number | null;
  maxSizeFile: number;
  storageUpload: FileStorageType;
  fileTypesAssess: FileFormatType[];
  countFileUpload: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
