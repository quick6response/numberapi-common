/** Таблица с информационными экранами для слайдов */
export interface InformationScreens {
  id: number;
  title: string;
  subTitle: string;
  fileType: string;
  fileId: number;
  fileBase64: string;
  createdAt: Date;
  updatedAt: Date;
}
