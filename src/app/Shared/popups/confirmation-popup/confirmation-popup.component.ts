import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupsService } from 'src/app/Services/popups.service';
import { confirmModelTypes, notificationIcon } from '../../helpers/enums/enums';
import { StorageService } from 'src/app/Services/storage.service';
import { RoutingService } from 'src/app/Services/routing.service';
import { ApisService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: ApisService,
    private popup: PopupsService,
    private storage: StorageService,
    private routingSer: RoutingService
    ) { }

  ngOnInit(): void {
  }

  closeModel(){
    this.dialogRef.close();
  }

  onConfirm(){
    if(confirmModelTypes.deleteAccount === this.data.type){
    }
  }



}
