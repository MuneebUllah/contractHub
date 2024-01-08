import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const arr = [
  MatIconModule,
  MatDialogModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arr
  ],
  exports: [
    ...arr
  ]
})
export class MatModule { }
