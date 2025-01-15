export enum QUEUE_STATUS {
    PENDING = 0,
    INPROGRESS = 1,
    DONE = 2
}

export enum QUEUE_PROCESS {
    SYNC = 'singleSubmission',
    DYNATRACE = 'logError'
}