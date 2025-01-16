import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UtilService } from '@services/util/util.service';

interface ErrorMessage {
  field: string;
  message: string;
  value: any;
}

interface ErrorItem {
  errors: {
    errorMessage?: {
      field: string;
      message: string;
      value: any;
    };
    syncStatus?: string;
  }[];
}
@Component({
  selector: 'app-multiple-errors-modal',
  templateUrl: './multiple-errors-modal.component.html',
  styleUrls: ['./multiple-errors-modal.component.scss'],
})

export class MultipleErrorsModalComponent implements OnInit {
  public errorData: ErrorItem[] = [];
  public errorsToDisplay: ErrorMessage[] | [ErrorMessage, ErrorMessage?][] = [];
  isMultipleError = false;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public utils: UtilService
  ) {
    this.errorData = navParams.get('errorData');
  }

  async ngOnInit() {
    await this.processArray();
  }

  async processArray() {
    try {
      const errors: ErrorMessage[] = [];

      for (const error of this.errorData) {
        if (error.errors.length > 0) {
          error.errors.forEach((err) => {
            const _err = err.errorMessage;
            if (_err?.field && _err?.message && _err?.value) {
              errors.push({
                field: _err.field,
                message: _err.message,
                value: _err.value
              });
            } else {
              errors.push({
                field: 'Not Specified',
                message: 'Sync Code',
                value: err.syncStatus
              });
            }
          });
        }
      }

      this.isMultipleError = errors.length > 1;
      this.errorsToDisplay = await this.arrayToPair(errors);

    } catch (error) {
      console.error('Error processing array:', error);
    }
  }

  arrayToPair(array: ErrorMessage[]): ErrorMessage[] | [ErrorMessage, ErrorMessage?][] {
    if (array.length > 1) {
      return array.reduce<[ErrorMessage, ErrorMessage?][]>((result, item, index) => (
        index % 2 ? result : [...result, [item, array[index + 1]]]
      ), []);
    } else {
      return array;
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async sendReports() {
    await this.utils.sendLogs();
  }
}