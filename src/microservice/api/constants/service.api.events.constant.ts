export const ServiceApiEventsConstant = {
  messages: {},
  // прослушиваемые события
  events: {
    // пользователь оформил подписку ВК Донут
    donutCreate: 'donutCreate',
    // пользователь продлил подписку
    donutProlonged: 'donutProlonged',
    // подписка истекла
    donutExpired: 'donutExpired',
    // пользователь отменил подписку
    donutCancelled: 'donutCancelled',
    // пользователь изменил цену
    donutChangePrice: 'donutChangePrice',
  },
} as const;
