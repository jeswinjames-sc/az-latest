import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Observable, Subscription, interval } from 'rxjs';

import { WHATS_NEW_TYPE, WHATS_NEW_LABELS } from '@utils/constants/whats-new-type';
import { WhatsNew } from '@models/whats-new';

@Component({
  selector: 'app-whats-new-modal',
  templateUrl: './whats-new-modal.component.html',
  styleUrls: ['./whats-new-modal.component.scss'],
})
export class WhatsNewModalComponent implements OnInit {

  public stories: WhatsNew[] = [];
  private timer?: Observable<number>;
  private subscription?: Subscription;
  private timeElapsed = 0;

  vid!: HTMLVideoElement;
  img!: HTMLImageElement;
  storyIndex = 0;
  mediaUrl: any;
  mediaDuration!: number;
  whatsNewType!: number;
  externalLinkTitle!: string;
  description!: string;
  theme!: string;
  showExternalLinkBtn =  false;
  isStoryPause = false;
  autoplay = false;

  ngOnInit() {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {
    this.stories = navParams.get('storyData');
    this.populateVariables(this.storyIndex);
    this.timeElapsed = 0;
  }

  ionViewDidEnter() {
    this.actionsForMedia();
  }

  actionsForMedia() {
    this.img = document.getElementById("image") as HTMLImageElement;
    this.vid = document.getElementById("video") as HTMLVideoElement;

    if(this.vid) {
      this.vid.onerror = (e) => {
        if(this.whatsNewType == WHATS_NEW_TYPE.VIDEO) {
          this.afterEachStory();
          this.mediaDuration = 5;
        }
      }

      this.vid.onended = (e) => {
        this.afterEachStory();
      };

      this.vid.onloadstart = (e) => {
        this.isStoryPause = this.whatsNewType == WHATS_NEW_TYPE.VIDEO ? true : false;
      };

      this.vid.onwaiting = (e) => {
        this.isStoryPause = this.whatsNewType == WHATS_NEW_TYPE.VIDEO ? true : false;
      };
  
      this.vid.onplaying = (e) => {
        this.isStoryPause = false;
      };

      this.vid.onpause = (e) => { 
        this.isStoryPause = true;
      };
    }
    
    //Progress loader events For IMAGE and TEXT 
    if(this.stories && (this.whatsNewType == WHATS_NEW_TYPE.IMAGE || this.whatsNewType == WHATS_NEW_TYPE.TEXT)){
      this.startTimer();
    }
  }

  populateVariables(index : number){
    if(this.stories.length > 0 ) {
      let story = this.stories[index];
      this.mediaUrl = story.mediaUrl.mediaLink;
      this.whatsNewType = story.type;
      this.mediaDuration = story.mediaUrl.duration;
      this.showExternalLinkBtn = story.url.link ? true : false;
      this.externalLinkTitle = story.url.title ? story.url.title : WHATS_NEW_LABELS.externalLinkButtonLabel;
      this.description = story.description;
      this.theme = story.theme;
      this.autoplay = story.type == WHATS_NEW_TYPE.VIDEO ? true : false;
    }
  }


  startTimer() { 
    this.isStoryPause = false;
    const story = this.stories[this.storyIndex];
    
    if (story) {
      const time = story.mediaUrl.duration; 
      const remTime = this.timeElapsed > 0 ? time - this.timeElapsed : time;
      this.timer = interval(1000);

      this.subscription = this.timer.subscribe((x) => {
        if (x === remTime) {
          this.isStoryPause = false;
          if (this.subscription) {
            this.subscription.unsubscribe(); 
          }
          this.timer = undefined;
          this.afterEachStory();
        } else {
          this.timeElapsed = x;
        }
      });
    }
  }

  pauseTimer() {
    if (this.timer) {
      this.isStoryPause = true;
      this.timer = undefined;
    } else {
      this.startTimer();
    }
  }

  afterEachStory() {
    if(this.storyIndex === this.stories.length - 1) {
      this.onClose();
    } else {
      this.storyIndex++;
      this.populateVariables(this.storyIndex);
      
      if(WHATS_NEW_TYPE.IMAGE == this.whatsNewType || WHATS_NEW_TYPE.TEXT == this.whatsNewType) {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
        this.actionsForMedia();
      } else if(WHATS_NEW_TYPE.VIDEO == this.whatsNewType) {
        this.timer = undefined;
        this.storyPause(false);
      } 
    }
  }

  async openExternalLink() {
    await Browser.open({ url: this.stories[this.storyIndex].url.link });
  }

  onClose() {
    this.isStoryPause = true;
    this.storyIndex = 0;
    this.modalCtrl.dismiss();
  }

  storyPause(val  : boolean) {
    if(this.whatsNewType == WHATS_NEW_TYPE.VIDEO && this.vid) {
      this.isStoryPause = val;
      val ? this.vid.pause() : this.vid.play().catch(()=> {
        this.vid.onloadedmetadata = (e) => {
          this.vid.play();
        };
      });
    } 
    else {
      // this.pauseTimer();
    }
  }

  getProgressBarClassName(index: number) { 
    if (index < this.storyIndex) {
      return "progress-bar progress-bar-finished";
    } else if (index === this.storyIndex) {
      return this.isStoryPause ? "progress-bar progress-bar-active progress-bar-paused" : "progress-bar progress-bar-active";
    } else {
      return "progress-bar";
    }
  }
}
