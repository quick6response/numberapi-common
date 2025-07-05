import { FileFormatType, FileStorageType } from '../../constants';

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
