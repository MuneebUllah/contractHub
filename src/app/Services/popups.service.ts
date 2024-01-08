import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutingService } from './routing.service';
import { AlertPopupComponent } from '../Shared/popups/alert-popup/alert-popup.component';
// import { ReportUserPopupComponent } from '../Shared/popups/report-user-popup/report-user-popup.component';
import { alertSubmitBtnMsgs, notificationIcon, reportType } from '../Shared/helpers/enums/enums';
import { ConfirmationPopupComponent } from '../Shared/popups/confirmation-popup/confirmation-popup.component';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor(
    public routing: RoutingService,
    private dialog: MatDialog,
    private storage: StorageService
  ) { }

  profilePopup: boolean = false;
  categoriesPopup: boolean = false;
  notificationPopup: boolean = false;

  /*================== OPEN POPUPS =====================*/

  openProfilePopup() {
    this.profilePopup = true;
    this.closeCategoriesPopup()
  }

  openCategoriesPopup() {
    this.categoriesPopup = true;
    this.closeProfilePopup()
  }

  openNotificationPopup() {
    this.notificationPopup = true;
    this.closeCategoriesPopup()
    this.closeProfilePopup()
  }

  /*================== CLOSE POPUPS =====================*/
  closeNotificationPopup() {
    this.notificationPopup = false;
  }

  closeProfilePopup() {
    this.profilePopup = false;
  }

  closeCategoriesPopup() {
    this.categoriesPopup = false;
  }

  resetPopups() {
    this.closeCategoriesPopup()
    this.closeProfilePopup()
    this.closeNotificationPopup()
  }

  openAlertPopup(
    title: string,
    icon: notificationIcon = notificationIcon.success,
    submitBtnMsg: string = alertSubmitBtnMsgs.default,
    message?: string
    ){
    return this.dialog.open(AlertPopupComponent, {
      data: {
        title,
        icon,
        message,
        submitBtnMsg,
      },
       backdropClass: 'mat-dialog-overlay-background',
    })
  }

  openConfirmPopup(type: string){
    return this.dialog.open(ConfirmationPopupComponent, {
      data: {
        type
      }
    })
  }
}
