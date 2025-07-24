/** Таблица найденных социальных упоминаний в сети к номеру */
export interface NumbersSocials {
  id: number;
  numberId: number;
  title: string;
  description: string;
  displayLink: string;
  image: string;
  link: string;
  shortLink: string;
  hash: string;
  createdAt: Date;
  updatedAt: Date;
  updatedInfoAt: Date;
}
