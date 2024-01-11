import { AfterViewInit, Component } from '@angular/core';
import {  ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-canvas',
  template: ` 
  <div>
  <canvas #canvasElement width="400" height="200" style="border: 1px solid black;"  (mousedown)="startEditing()"></canvas>
  <textarea
    [(ngModel)]="textContent"
    *ngIf="editing"
  ></textarea>
  <button (click)="toggleEditMode()">{{ editing ? 'View' : 'Edit' }}</button>
</div>`,
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvasElement') canvasElement!:  ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D | any ;
  public editing = false;
  textContent :string = 'Your document content goes here...';
  
  constructor(private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    const canvas = this.canvasElement.nativeElement;
    this.context = canvas.getContext('2d');
  
    if (!this.context) {
      console.error('Unable to get 2D context for canvas');
      return;
    }
  
    this.renderCanvas();
  }

  renderCanvas() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.fillStyle = 'black';
    this.context.font = '14px Arial';
    this.wrapText(this.textContent, 10, 20, this.context.canvas.width - 20, 20);
  }

  wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
    const words = text.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = this.context.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        this.context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    this.context.fillText(line, x, y);
  }

  startEditing() {
    if (!this.editing) {
      this.editing = true;
      this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.canvasElement.nativeElement, 'pointer-events', 'none');
    }
  }

  stopEditing() {
    if (this.editing) {
      this.editing = false;
      this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.canvasElement.nativeElement, 'pointer-events', 'auto');
      this.renderCanvas();
    }
  }

  toggleEditMode() {
    if (this.editing) {
      this.stopEditing();
    } else {
      this.startEditing();
    }
  }
}

