// Типы хранилища файлов
export enum FileStorageType {
  // на сервере
  SERVER = 'server',
  S3_MINIO = 's3/minio',
  S3_VK_MAIL = 's3/vkmail',
  INTEGRATION = 'integration',
}

export default FileStorageType;
