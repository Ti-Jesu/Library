import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'library';
  constructor(protected _notificationSvc: NotificationService) {}
  msg: string;
  sendInfo(msg: string) {
    this.msg = msg;
    this._notificationSvc.info('header', msg, 5000);
  }

  sendSuccess(msg: string, header: string) {
    this.msg = msg;
    this._notificationSvc.success(header, msg);
  }

  sendWarning(msg: string, header: string) {
    this.msg = msg;
    this._notificationSvc.warning(header, msg);
  }

  sendError(msg: string) {
    this.msg = msg;
    this._notificationSvc.error('Error', msg, 3000);
  }

  sendNotLogged() {
    this._notificationSvc.error('Info', 'you are not logged in', 10000);
  }
}
