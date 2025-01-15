export interface QueueParams {
  queueId?: string;
  id: string;
  status: number; // pending , in progress, done
  body?: QueueBody;
  process: string;
  message?: Array<string>;
  dateTimeAdded?: string;
  timeStamp?: number;
}

export interface QueueBody{
  message?: string;
}