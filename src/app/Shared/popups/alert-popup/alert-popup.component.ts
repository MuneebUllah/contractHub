import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iconPaths, notificationIcon } from '../../helpers/enums/enums';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  icons = notificationIcon;
  iconPaths = iconPaths;

  constructor(
    private dialog: MatDialogRef<AlertPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  closeDialog(){
    this.dialog.close();
  }

  ngOnInit(): void {
  }

}
