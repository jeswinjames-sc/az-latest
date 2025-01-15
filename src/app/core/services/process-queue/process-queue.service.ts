import { Injectable } from '@angular/core';
import { QueueParams } from '@core/interfaces';
import { BehaviorSubject, from, Observable, of, queueScheduler, Subject, Subscription, timer } from 'rxjs';
import { observeOn, filter, take } from 'rxjs/operators';
import moment from 'moment';

import { CoreSyncService, DynatraceService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { ConnectivityService } from '../connectivity/connectivity.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { RESPONSE_STATUS } from '@utils/constants/response-status';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { v4 as uuid } from 'uuid';
import { environment } from '@environment/environment';
import { Platform } from '@ionic/angular';


/**
 * Injectable
 * - This services is responsible for synching offline
 * - this can be use for batch processing in the background
 * @author Jerone Altura
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessQueueService {
  private queueDataStorage: any;
  private queueSource$: Observable<any> = new Observable;
  private leadIdSubject: BehaviorSubject<any> = new BehaviorSubject(String);
  public queueProgress$: BehaviorSubject<any> = new BehaviorSubject({});
  public queueSubscriptions: Subscription[] = [];
  private timerSubscription: Subscription[] = [];

  public globalTimerSubject$: BehaviorSubject<any> = new BehaviorSubject(0);

  networkAndServerIssueCodes: any[] = [
    RESPONSE_STATUS.CLOUDFARE_ISSUE_523,
    RESPONSE_STATUS.CLOUDFARE_ISSUE_524,
    RESPONSE_STATUS.INTERNET_OUTAGE,
    RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE,
    RESPONSE_STATUS.REQUEST_TIME_OUT,
    RESPONSE_STATUS.OTHER_HTTP_ERROR
  ];
  intervalId: any;
  constructor(
    private platform: Platform,
    public coreSyncService: CoreSyncService,
    private connectivityService: ConnectivityService,
    private utilService: UtilService,
    private dynaTrace: DynatraceService
  ) {

    this.updateInProgressToPending().finally(() => {
      //console.log("Update inprogress to pending ::", this.utilService.getCurrentDateTime())
    })

  }

  /**
   * Adds to queue
   * @param queueParams 
   * - to be stored in localStorage queueDataStorage.
   * @author Jerone Altura
   */
  public async addToQueue(queueParams: QueueParams): Promise<boolean> {
    try {
      if (!queueParams.id || queueParams.id === "undefined") {
        return false;
      }

      this.queueDataStorage = localStorage.getItem("queueDataStorage");
      const queueData: QueueParams[] = this.queueDataStorage ? JSON.parse(this.queueDataStorage) : [];

      queueParams = {
        ...queueParams,
        status: QUEUE_STATUS.PENDING,
        dateTimeAdded: this.getDateTime(),
        timeStamp: Date.now(),
        queueId: uuid(),
        message: [`${this.getDateTime()} :: Log : ${queueParams.queueId} added to queueDataStorage`]
      };

      const exists = queueData.some(({ id, process, status }) =>
        id === queueParams.id &&
        process === queueParams.process &&
        [QUEUE_STATUS.PENDING, QUEUE_STATUS.INPROGRESS].includes(status)
      );

      if (exists) {
        return false;
      }

      queueData.push(queueParams);
      localStorage.setItem('queueDataStorage', JSON.stringify(queueData));

      return true;
    } catch (error) {
      console.error('Error in addToQueue:', error);
    }
  }

  /**
   * Updates queue
   * @param queueParams 
   * @returns queue 
   * @author Jerone Altura
   */
  public updateQueue(queueParams: QueueParams): Promise<any> {

    return new Promise((resolve) => {
      this.queueDataStorage = localStorage.getItem("queueDataStorage");
      //console.log("start updateQueue::", queueParams, " queueDataStorage::", this.queueDataStorage,)
      let queueData = [];
      if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
        queueData = JSON.parse(this.queueDataStorage);
        let data = queueData.find(({ queueId }) => queueId === queueParams.queueId)
        if (data !== null && data !== undefined) {
          let index = queueData.indexOf(data);
          queueData[index] = queueParams;
          //console.log("updateQueue::", data, " index::", index, "queueData ::", queueData[index], "queuePaams::", queueParams)
          localStorage.setItem('queueDataStorage', JSON.stringify(queueData));
          this.queueProgress$.next(queueParams);
          resolve(queueParams);
        }
      }
      else {
        resolve(false);
      }
    });
  }

  /**
   * Queues in progress
   * @returns in progress queue items.
   * @author Jerone Altura
   */
  queueInProgress(): Promise<any> {
    return new Promise((resolve) => {
      this.queueDataStorage = localStorage.getItem("queueDataStorage");
      let result = [];
      if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
        const queueData = JSON.parse(this.queueDataStorage);
        queueData.forEach((item: any, index: number) => {
          if (item.status === QUEUE_STATUS.INPROGRESS)
            result[index] = item;
        })
      }
      //console.log(`in progress queue items TABLE:`)
      //console.table(result);
      resolve(result);
    });
  }

  /**
   * Gets queue progress
   * @param data 
   * @returns queue progress 
   */
  getQueueProgress(data: BehaviorSubject<any>): Observable<boolean> {
    const response: Subject<any> = new Subject();

    data.pipe(filter(item => typeof item == 'object'))
      .subscribe(queueParams => {
        if (Object.keys(queueParams).length > 0) {
          //console.log("getQueueProgress trigeres ID:", queueParams)
          let queueData = [];
          this.queueDataStorage = localStorage.getItem("queueDataStorage");
          if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
            queueData = JSON.parse(this.queueDataStorage);
            let isInprogress = queueData.some(({ id, process, status }) => id === queueParams.id && process === queueParams.process && status === QUEUE_STATUS.INPROGRESS)
            //console.log("queueData.some::", isInprogress)
            response.next(isInprogress);
          }
        }
      });

    return response.asObservable();
  }

  /**
 * Gets queue progress
 * @param data 
 * @returns queue progress 
 */
  async getQueueProgressPromise(queueParams: QueueParams): Promise<Boolean> {
    return new Promise((resolve) => {
      if (typeof queueParams == 'object') {
        let queueData = [];
        this.queueDataStorage = localStorage.getItem("queueDataStorage");
        if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
          queueData = JSON.parse(this.queueDataStorage);
          const isInprogress = queueData.some(({ id, process, status }) => id === queueParams.id && process === queueParams.process && status === QUEUE_STATUS.INPROGRESS)
          resolve(isInprogress);
          //console.log("queueData.some::", isInprogress)
        }
      } else {
        resolve(false);
      }
    });

  }

  /**
   * Updates in progress to pending
   * @returns in progress to pending 
   * - updates queue items with in progress status .
   * - this method is only executed in processQueue initialization.
   * @author Jerone Altura
   */
  updateInProgressToPending(): Promise<Boolean> {
    return new Promise((resolve) => {
      this.queueDataStorage = localStorage.getItem("queueDataStorage");

      if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
        const queueData = JSON.parse(this.queueDataStorage);
        queueData.forEach((item: QueueParams, index: number) => {
          // update queuedata with status inprogress to pending
          if (item.status === QUEUE_STATUS.INPROGRESS)
            item.status = QUEUE_STATUS.PENDING;
          queueData[index] = item;

          // delete old queuedata with status done after 30 minutes
          let duration = moment.duration(moment().diff(moment(item.timeStamp)));
          if (duration.asMinutes() > 30 && item.status == QUEUE_STATUS.DONE)
            queueData.splice(index, 1)
        })
        localStorage.setItem('queueDataStorage', JSON.stringify(queueData));
        resolve(true);
      }
      else {
        resolve(false);
      }
    });
  }


  /**
  * Delete in queue Items
  * @returns in progress to pending 
  * @author Jerone Altura
  */
  deleteQueueItems(id: string) {

    this.queueDataStorage = localStorage.getItem("queueDataStorage");
    if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
      const queueData = JSON.parse(this.queueDataStorage);
      const filtered = queueData.filter(item => item.id !== id)
      localStorage.setItem('queueDataStorage', JSON.stringify(filtered));
    }
  }

  /**
   * Gets pending queue items
   * @returns pending queue items 
   * @author Jerone Altura
   */
  public getPendingQueueItems(): Promise<any> {
    return new Promise((resolve) => {
      this.queueDataStorage = localStorage.getItem("queueDataStorage");
      const result = [];
      if (this.queueDataStorage !== null && this.queueDataStorage !== undefined && this.queueDataStorage !== '') {
        const queueData = JSON.parse(this.queueDataStorage);
        queueData.map((item: any, index: number) => {
          if (item.status === QUEUE_STATUS.PENDING)
            result[index] = item;
        })
      }
      //console.log(`pending queue items TABLE:`)
      //console.table(result);
      resolve(result.reverse());
    });
  }


  /**
  * Manual Process 
  * @param queueParams 
  */
  async manualProcess(queueParams: QueueParams, callee?) {
    await this.platform.ready();
    if (callee) console.log('[debug]manualProcess, callee', callee);
    this.addToQueue(queueParams).finally(() => {
      this.connectivityService.appIsOnline$.pipe(
        take(1)
      ).subscribe(async isConnected => {
        if (isConnected) {
          let that = this;
          let pendingItems = await this.getPendingQueueItems();
          if (pendingItems && pendingItems.length > 0) {
            let queueItem = pendingItems.find(item => item && item.id === queueParams.id);
            if (queueItem) {
              if (queueItem.process == QUEUE_PROCESS.SYNC) {
                queueItem.status = QUEUE_STATUS.INPROGRESS;
                queueItem.message.push(`${this.getDateTime()}:: Log : MANUAL Single Submission for leadId: ${queueItem.id} started`)
                await that.updateQueue(queueItem)
                that.leadIdSubject.next(queueItem.id);
              }

              if (queueItem.process == QUEUE_PROCESS.DYNATRACE) {
                if (!!environment.dynatraceEnabled) {  // send logs to dynatrace if en
                  const { body, dateTimeAdded } = queueItem;
                  await this.dynaTrace.logError(`[${dateTimeAdded}] ${body.message}`);
                  queueItem.status = QUEUE_STATUS.DONE;
                  await that.updateQueue(queueItem);
                }
              }
            }
          }
        }
      })
    })
  }


  /**
   * Process queue
   * - initialize the process observable and connectivity subscriptuion
   * - reads all pending queue items in exectes command base on process name
   * @author Jerone Altura
   */
  async processQueue() {

    if (!!environment.dynatraceEnabled) {
      this.dynaTrace.initializeDynatraceUserSesion();
    }

    //console.log('processQueue  started')

    this.queueSubscriptions.push(this.utilService.queueParams$
      .subscribe(async (queueParams) => {
        await this.manualProcess(queueParams)
      })
    );

    // START updateInProgressToPending :: is revert all queue w/ status "in progress" if the app is closed during synching
    await this.updateInProgressToPending();
    // end updateInProgressToPending

    // START initializing process observables
    this.initializeSingleSubmission();
    // END initializing process observables

    this.queueSubscriptions.push( // subscription
      this.connectivityService.appIsOnline$
        .subscribe(async isConnected => {
          if (isConnected) {
            this.timerSubscription.push(
              timer(0, 300000).subscribe(async (processNo) => {

                this.globalTimerSubject$.next(processNo);

                console.log(`Cron Process Queue Executed::${processNo} , date::`, this.utilService.getCurrentDateTime());

                let that = this;
                let pendingItems = await this.getPendingQueueItems();
                if (pendingItems && pendingItems.length > 0) {
                  let ctr = 0;
                  this.intervalId = null;

                  this.intervalId = setInterval(async () => {
                    if (ctr <= pendingItems.length - 1) {
                      const val = pendingItems[ctr];
                      if (val && val.hasOwnProperty(`process`) && (val.hasOwnProperty(`id`) || val.hasOwnProperty(`body`))) {
                        if (val.process == QUEUE_PROCESS.SYNC) {
                          val.status = QUEUE_STATUS.INPROGRESS;
                          val.message.push(`${this.getDateTime()}:: Log : Single Submission for leadId: ${val.id} started `)
                          await that.updateQueue(val)
                          that.leadIdSubject.next(val.id);
                        }

                        if (val.process == QUEUE_PROCESS.DYNATRACE) {
                          if (!!environment.dynatraceEnabled) {  // send logs to dynatrace if en
                            const { body, dateTimeAdded } = val;
                            await this.dynaTrace.logError(`[${dateTimeAdded}] ${body.message}`);
                            val.status = QUEUE_STATUS.DONE;
                            await that.updateQueue(val);
                          }
                        }
                        else {
                          //console.log(val.process, `does not exist`);
                        }
                      }
                      ctr++;
                    } else {
                      clearInterval(this.intervalId);
                    }
                  }, 3000);

                } else {
                }
              })
            )
          } else { // Offline
            clearInterval(this.intervalId);
            this.killTimerSubscription();
            await this.updateInProgressToPending()
            console.log("Update inprogress to pending from ONLINE to OFFLINE ::", this.utilService.getCurrentDateTime())

          }
        })

    ) // end subscription
    //console.log('processQueue Initialized');
  }

  /**
   * Initializes single submission proceess
   * @author Jerone Altura
   */
  initializeSingleSubmission() {
    this.queueSubscriptions.push( // subscription
      this.coreSyncService.singleSubmission(this.leadIdSubject).subscribe((data) => {
        //console.log("procees-queue->singleSubmission subscription::", data)
        this.queueDataStorage = localStorage.getItem('queueDataStorage');
        if (!!this.queueDataStorage) {
          let queueData = JSON.parse(this.queueDataStorage);
          let finalQueueData: any = {}
          //NOTE THAT the mapping here is temporary since the format of 'data' will change after sir Edric's PR merge.
          if (!!data && !!data.relatedModules) {
            data.relatedModules.forEach((logs: any) => {
              const filteredQueue = queueData.filter((queue: any) => { return queue.id == data.leadId && queue.status == QUEUE_STATUS.INPROGRESS }); //filter only the specific moduleId and status in progress.
              if (filteredQueue.length > 0) {
                const latestQueueTimestamp = Math.max.apply(Math, filteredQueue.map((timeStamp: any) => { return timeStamp.timeStamp; })); //get the latest timeStamp record

                queueData.map((queueList: any) => { //update the specific entry's status and timeStamp
                  if (queueList.id == data.leadId && queueList.timeStamp == latestQueueTimestamp) {
                    let logMessage = null;
                    if (this.networkAndServerIssueCodes.includes(logs.statusCode) || logs.syncStatus == CONSTANTS_STRING.NETWORK_ERROR) { // if syncStatus is 69 or statusCode is -1, -2, -3, -4, 523 or 524, revert to PENDING
                      queueList.status = QUEUE_STATUS.PENDING;
                      logMessage = `${this.getDateTime()}:: Log : Single Submission for leadId: ${data.leadId} went back to ${QUEUE_STATUS.PENDING}. Status code is: ${logs.statusCode}`
                    } else { //else queue status will be DONE
                      queueList.status = QUEUE_STATUS.DONE;
                      logMessage = `${this.getDateTime()}:: Log : Single Submission for leadId: ${data.leadId} done. Status code is: ${logs.statusCode}`
                    }
                    queueList.timeStamp = Date.now();
                    queueList.message.push(logMessage);
                    finalQueueData = queueList;
                  }
                });
              }
            });
            localStorage.setItem('queueDataStorage', JSON.stringify(queueData));
            finalQueueData.result = data;
            finalQueueData.resultTimestamp = Date.now();
            setTimeout(() => this.queueProgress$.next(finalQueueData), 1000)
          }
        }
      })
    )  // end subscription
  }
  /**
    * Kill timer subscription
    */
  killTimerSubscription() {
    if (this.timerSubscription && this.timerSubscription.length) {
      this.timerSubscription.map((subs, i) => {
        subs.unsubscribe();
      });
      this.timerSubscription = [];
    }
  }

  /**
   * Kills all subscription
   * @author Jerone Altura
   */
  async killAllSubscription() {
    await this.updateInProgressToPending();
    this.queueSubscriptions.map((subs, i) => {
      subs.unsubscribe();
    })
    this.killTimerSubscription();
    this.queueSubscriptions = [];
  }

  clearQueueStorage() {
    localStorage.removeItem('queueDataStorage');
  }

  getDateTime() {
    const dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let date = ('0' + dateObj.getDate()).slice(-2);
    let hour = ('0' + dateObj.getHours()).slice(-2);
    let minute = ('0' + dateObj.getMinutes()).slice(-2);
    let second = ('0' + dateObj.getSeconds()).slice(-2);
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }

}
