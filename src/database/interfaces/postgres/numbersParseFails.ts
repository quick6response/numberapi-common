/** Таблица ошибок парсинга номеров */
export interface NumbersParseFails {
  number: string;
  reason: string;
  isProcessed: boolean;
  lastAttemptAt: Date;
}
