export const getRoutingKeyName = (exchange: string, routingKey: string) =>
  exchange + '.' + routingKey;
export const getQueueName = (queue: string, routingKey: string) =>
  queue + '-' + routingKey.replace('.', '-').toLowerCase() + '-queue';
