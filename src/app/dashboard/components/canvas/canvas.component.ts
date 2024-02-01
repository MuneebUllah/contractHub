// import { AfterViewInit, Component } from '@angular/core';
// import {  ElementRef, ViewChild, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-canvas',
//   template: ` 
//   <div>
//   <canvas #canvasElement width="400" height="200" style="border: 1px solid black;"  (mousedown)="startEditing()"></canvas>
//   <textarea
//     [(ngModel)]="textContent"
//     *ngIf="editing"
//   ></textarea>
//   <button (click)="toggleEditMode()">{{ editing ? 'View' : 'Edit' }}</button>
// </div>`,
//   styleUrls: ['./canvas.component.scss']
// })
// export class CanvasComponent implements AfterViewInit {
//   @ViewChild('canvasElement') canvasElement!:  ElementRef<HTMLCanvasElement>;

//   public context!: CanvasRenderingContext2D | any ;
//   public editing = false;
//   textContent :string = 'Your document content goes here...';
  
//   constructor(private renderer: Renderer2) {}
  
//   ngAfterViewInit() {
//     const canvas = this.canvasElement.nativeElement;
//     this.context = canvas.getContext('2d');
  
//     if (!this.context) {
//       console.error('Unable to get 2D context for canvas');
//       return;
//     }
  
//     this.renderCanvas();
//   }

//   renderCanvas() {
//     this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
//     this.context.fillStyle = 'black';
//     this.context.font = '14px Arial';
//     this.wrapText(this.textContent, 10, 20, this.context.canvas.width - 20, 20);
//   }

//   wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
//     const words = text.split(' ');
//     let line = '';

//     for (let n = 0; n < words.length; n++) {
//       const testLine = line + words[n] + ' ';
//       const metrics = this.context.measureText(testLine);
//       const testWidth = metrics.width;

//       if (testWidth > maxWidth && n > 0) {
//         this.context.fillText(line, x, y);
//         line = words[n] + ' ';
//         y += lineHeight;
//       } else {
//         line = testLine;
//       }
//     }

//     this.context.fillText(line, x, y);
//   }

//   startEditing() {
//     if (!this.editing) {
//       this.editing = true;
//       this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'none');
//       this.renderer.setStyle(this.canvasElement.nativeElement, 'pointer-events', 'none');
//     }
//   }

//   stopEditing() {
//     if (this.editing) {
//       this.editing = false;
//       this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
//       this.renderer.setStyle(this.canvasElement.nativeElement, 'pointer-events', 'auto');
//       this.renderCanvas();
//     }
//   }

//   toggleEditMode() {
//     if (this.editing) {
//       this.stopEditing();
//     } else {
//       this.startEditing();
//     }
//   }
// }
// import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
// import {jsPDF} from 'jspdf'
// import { ApisService } from 'src/app/Services/apis.service';
// import { HeaderService } from 'src/app/Services/header.service';
// import { StorageService } from 'src/app/Services/storage.service';
// import { ContractForm } from 'src/app/Shared/models/contractForm';
// import * as pdfjsLib from 'pdfjs-dist';

// pdfjsLib.GlobalWorkerOptions.workerSrc = 'src/assets/CamScanner 02-07-2023 14.52.pdf';
// @Component({
//   selector: 'app-pdf-canvas',
//   templateUrl: './canvas.component.html',
//   styleUrls: ['./canvas.component.scss']
// })
// export class CanvasComponent implements OnInit {
//   pdf:any;
//   contractForm:ContractForm = new ContractForm()
//     @ViewChild(' content', {static: false}) el!: ElementRef;
//     constructor( public api:ApisService ,private storage : StorageService , private header:HeaderService){}
//     ngOnInit(): void {
//       this.storage.getDocument.subscribe(res=>{
        
//         if(res){
//           // debugger
//           setTimeout(()=>{this.getDocument()},500)
//         }
//       })
//     }  
//     getDocument() {
//       this.api.getDocument(this.contractForm.documentId, this.header.headers).subscribe({
//         next: ((data: any) => {
//           this.pdf = data;
//           console.log(this.pdf, this.contractForm.documentId);
//           const contentDiv = document.getElementById('content');
//           if (contentDiv) {
//             const pdfBlob = new Blob([data], { type: 'application/pdf' });
//             const arrayBufferPromise = new Response(pdfBlob).arrayBuffer();
            
//             arrayBufferPromise.then((arrayBuffer) => {
//               const uint8Array = new Uint8Array(arrayBuffer);
//               pdfjsLib.getDocument({ data: uint8Array }).promise.then((pdfDocument) => {
//                 pdfDocument.getPage(1).then((pdfPage) => {
//                   const canvas = document.createElement('canvas');
//                   contentDiv.appendChild(canvas);
    
//                   const context = canvas.getContext('2d');
//                   if (context) {
//                     const viewport = pdfPage.getViewport({ scale: 1.5 });
    
//                     canvas.width = viewport.width;
//                     canvas.height = viewport.height;
    
//                     const renderTask = pdfPage.render({
//                       canvasContext: context as Object,
//                       viewport: viewport,
//                     });
    
//                     renderTask.promise.then(() => {
//                       console.log('PDF rendered on canvas');
//                     });
//                   }
//                 });
//               });
//             });
//           }
//         }),
//         error: (error => {
//           console.error(error);
//         }),
//       });
//     }
    
    
//     makePDF(){    
//     let pdf = new jsPDF('p','pt','a4') ;
//     pdf.html(this.el.nativeElement,{
//     callback: (pdf:any)=>
//     pdf.save ("demo.pdf")
//    } )  
//   }

    // if (!context) {
    //   console.error('Unable to retrieve 2D context for canvas.');
    //   return;
    // }
    // Example PDF URL (replace with your PDF URL or use a local file)
    // const pdfUrl = 'path/to/your/pdf.pdf';

    // Load the PDF document
//     pdfjs.getDocument(pdfUrl).promise.then((pdfDoc_: any) => {
//       this.pdfDoc = pdfDoc_;
//       this.renderPage(this.pageNum, context);
//     });
//   }

//   renderPage(pageNum: number, context: CanvasRenderingContext2D): void {
//     this.pdfDoc.getPage(pageNum).then((page: any) => {
//       const viewport = page.getViewport({ scale: 1.5 });
//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport
//       };

//       page.render(renderContext);
//     });
//   }
// }
// import { Component } from '@angular/core';
// import { DragulaService } from 'ng2-dragula';

// @Component({
//   selector: 'app-copy',
//   template: `
//     <div class='container' dragula="COPYABLE" id="left">
//       <div>Left Container</div>
//       <div>Left Container</div>
//       <div>Left Container</div>
//       <div>Left Container</div>
//       <div>Left Container</div>
//       <!-- Add your content for the left container here -->
//     </div>
//     <div class='container' dragula="COPYABLE" id="right">
//       <div>Right Container</div>
//       <div>Right Container</div>
//       <div>Right Container</div>
//       <div>Right Container</div>
//       <div>Right Container</div>
//       <!-- Add your content for the right container here -->
//     </div>
//   `,
//    styleUrls: ['./canvas.component.scss'],
// })
// export class CanvasComponent {
//   constructor(private dragulaService: DragulaService) {
//     dragulaService.createGroup('COPYABLE', {
//       copy: (el, source) => {
//         return source.id === 'left';
//       },
      // accepts: (el?: Element, target?: Element, source?: Element, sibling?: Element) => {
        // To avoid dragging from right to left container
      //   return target && target.id !== 'left';
      // },
      
      
//     });
//   }
// }



// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import * as pdfjsLib from 'pdfjs-dist';
// import { StorageService } from 'src/app/Services/storage.service';

// pdfjsLib.GlobalWorkerOptions.workerSrc = '../../../../../node_modules/pdfjs-dist/build/pdf.worker.js';
// @Component({
//     selector: 'app-pdf-canvas',
//     templateUrl: './canvas.component.html',
//     styleUrls: ['./canvas.component.scss']
//   })
// export class CanvasComponent implements OnInit {
//   constructor(private storage:StorageService){}
// ngOnInit(): void {
//   this.storage.getDocument.subscribe(res=>{
    
//     if(res){
//       // setTimeout(()=>{},500)
//     }
//   })
//   this.loadPDF();
// }  

//   openPdf() {
  //     pdfjsLib.GlobalWorkerOptions.workerSrc = '../../../../../node_modules/pdfjs-dist/build/pdf.worker.js';
  //     const loadingTask = pdfjsLib.getDocument('src/assets/CamScanner 02-07-2023 14.52.pdf');
//     loadingTask.promise.then(function(pdf) {
  //     console.log(pdf);
  //     });
  // }
  
  
//   @ViewChild('theCanvas') canvas!: ElementRef;
  
//   loadPDF() {
//   // debugger
//   const loadingTask = pdfjsLib.getDocument('src/assets/CamScanner02-07-202314.52.pdf');
//   loadingTask.promise.then((pdf) => {
//     pdf.getPage(1).then((page) => {
//       const viewport = page.getViewport({ scale: 1.5 });
//       const canvas = this.canvas.nativeElement;
//       const context = canvas.getContext('2d');

//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       page.render({ canvasContext: context, viewport: viewport });
//     });
//   });
// }
//   myFunction(color:string ) {
//     var c = document.getElementById("myCanvas");
//     c.setAttribute("class", color);
//     var ctx = c.getContext("2d");
//     ctx.fillStyle = `${color}`;
//     ctx.fillRect(20, 20, 460, 360);
// }
//   @ViewChild('pdfCanvas') pdfCanvas!: ElementRef<HTMLCanvasElement>;

//   ngOnInit(): void {
//     this.loadPdf();
  // }

//   loadPdf() {
//     const pdfUrl = 'src/assets/CamScanner 02-07-2023 14.52.pdf';

//     pdfjsLib.GlobalWorkerOptions.workerSrc = '../../../../../node_modules/pdfjs-dist/build/pdf.worker.js';

//     pdfjsLib.getDocument(pdfUrl).promise.then((pdfDocument) => {
//       pdfDocument.getPage(1).then((pdfPage) => {
//         const canvas = this.pdfCanvas.nativeElement;
//         const context = canvas.getContext('2d');

//         const viewport = pdfPage.getViewport({ scale: 1.5 });

//         canvas.width = viewport.width;
//         canvas.height = viewport.height;

//         // Render the PDF page on the canvas
//         pdfPage.render({
//           canvasContext: context as any,
//           viewport: viewport,
//         });

//         console.log('PDF rendered on canvas');
//       });
//     });
//   }
// }
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { StorageService } from 'src/app/Services/storage.service';

// declare const PDFJS: any;
// declare const Annotator: any;

// @Component({
//       selector: 'app-pdf-canvas',
//       templateUrl: './canvas.component.html',
//       styleUrls: ['./canvas.component.scss']
// })
// export class CanvasComponent implements OnInit {
//   @ViewChild('pdfViewer') pdfViewer!: ElementRef;
// constructor(private storage:StorageService){}
//   ngOnInit(): void {
//     this.storage.getDocument.subscribe(res=>{
    
//           if(res){
//             setTimeout(()=>{ this.initPdfViewer();
//     this.initAnnotator()},500)
//           }
//         })
   
//   }

//   initPdfViewer(): void {
//     const pdfViewer = this.pdfViewer.nativeElement;
//     const pdfUrl = '../../../../assets/CamScanner 02-07-2023 14.52.pdf'; // Replace with the path to your PDF file

//     PDFJS.getDocument(pdfUrl).promise.then((pdfDocument:any) => {
//       pdfDocument.getPage(1).then((pdfPage:any) => {
//         const viewport = pdfPage.getViewport({ scale: 1.5 });
//         pdfViewer.width = viewport.width;
//         pdfViewer.height = viewport.height;

//         pdfPage.render({
//           canvasContext: pdfViewer.getContext('2d'),
//           viewport: viewport
//         });
//       });
//     });
//   }

//   initAnnotator(): void {
//     const pdfViewer = this.pdfViewer.nativeElement;
//     const annotator = new Annotator.PdfViewer(pdfViewer);

//     annotator.addView(pdfViewer);
//     annotator.loadAnnotations([]);
//     annotator.setupViewer();
//   }
// }


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/Services/storage.service';
import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc =
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
@Component({
      selector: 'app-pdf-canvas',
      templateUrl: './canvas.component.html',
      styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  canvas:any;
  // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  @ViewChild('pdfCanvas', { static: true }) pdfCanvas!: ElementRef<HTMLCanvasElement>;
  constructor(private storage:StorageService){}
  ngOnInit(): void {
    this.canvas = this.pdfCanvas.nativeElement;
    // this.loadPdf();
    // this.renderPDF('../../../../assets/CamScanner 02-07-2023 14.52.pdf', 'pdfCanvas');
  }
  
  // loadPdf(): void {
  //   const pdfUrl = '../../../../assets/CamScanner 02-07-2023 14.52.pdf';
  
  //   pdfjsLib.getDocument(pdfUrl).promise.then((pdfDocument) => {
  //     pdfDocument.getPage(1).then((pdfPage) => {
  //       const canvas = this.pdfCanvas.nativeElement;
  //       const context = canvas.getContext('2d');
  //       const viewport = pdfPage.getViewport({ scale: 1.5 });
  
  //       canvas.width = viewport.width;
  //       canvas.height = viewport.height;
  
  //       pdfPage.render({
  //         canvasContext: context as Object, 
  //         viewport: viewport,
  //       });
  //     });
  //   });
  // }

  //  renderPDF(url:any, canvasId:any) {
  //   // Get the canvas and context
  //   const canvas = this.pdfCanvas.nativeElement;
  //   const context = canvas.getContext('2d');

  //   // Asynchronously download PDF
  //   pdfjsLib.getDocument(url).promise.then((pdfDoc) => {
  //     // Fetch the first page
  //     for (let pageNumber = 1; pageNumber <= pdfDoc.numPages; pageNumber++){
  //         // debugger
  //     pdfDoc.getPage(pageNumber).then((page) => {
  //       const viewport = page.getViewport({ scale: 1 });
  //       canvas.width = viewport.width;
  //       canvas.height = viewport.height;

  //       const renderContext:any = {
  //         canvasContext: context,
  //         viewport: viewport,
  //       };
  //       page.render(renderContext);
  //     });
  // }
  //   });
  // }




        // $document.querySelector("#pdf-upload").addEventListener("change", function (e:Event) {
        //     $document.querySelector("#pages").innerHTML = "";
        //     console.log("function Called");
        //     var file:any = e?.target?.files[0]
        //     if (file.type != "application/pdf") {
        //         alert(file.name + " is not a pdf file.")
        //         return
        //     }
        //     const canvas = this.pdfCanvas.nativeElement;
        //       const context = canvas.getContext('2d');
        //     var fileReader = new FileReader();

        //     fileReader.onload = function () {
        //         var typedarray = new Uint8Array(this.result);

        //         pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
        //             for (var i = 0; i < pdf.numPages; i++) {
        //                 (function (pageNum) {
        //                     pdf.getPage(i + 1).then(function (page) {
        //                         var viewport = page.getViewport({scale:1.5});
        //                         var canvas = document.createElement("canvas");
        //                         canvas.className = "page";
        //                         document.querySelector("#pages").appendChild(canvas);
        //                         canvas.height = viewport.height;
        //                         canvas.width = viewport.width;

        //                         page.render({
        //                             canvasContext: canvas.getContext('2d') as CanvasRenderingContext2D,,
        //                             viewport: viewport
        //                         }).promise.then(function () {
        //                             console.log('Page rendered');
        //                         });
        //                     });
        //                 })(i + 1);
        //             }
        //         });
        //     };

        //     fileReader.readAsArrayBuffer(file);
        // });

      //   onFileChange(event: Event): void {
      //     const inputElement = event.target as HTMLInputElement;
      //     const files = inputElement.files;
      // console.log("fnction CaLLED");
      
      //     if (!files || files.length === 0) {
      //       return ;
      //     }
      
      //     const pagesContainer = document.querySelector("#pages");
      //     if (pagesContainer) {
      //       pagesContainer.innerHTML = "";
      //     }
      
      //     const file = files[0];
      //     if (file.type !== "application/pdf") {
      //       alert(`${file.name} is not a pdf file.`);
      //       return;
      //     }
      
      //     const context = this.canvas.getContext('2d');
      //     if (!context) {
      //       console.error('Unable to get 2D context for canvas');
      //       return;
      //     }
      
      //     const fileReader = new FileReader();
      
      //     fileReader.onload = () => {
      //       const typedArray = new Uint8Array(fileReader.result as ArrayBuffer);
      
      //       pdfjsLib.getDocument(typedArray).promise.then((pdf) => {
      //         for (let i = 0; i < pdf.numPages; i++) {
      //           (function (pageNum: number) {
      //             pdf.getPage(i + 1).then((page) => {
      //               const viewport = page.getViewport({ scale: 1.5 });
      //               const newCanvas = document.createElement("canvas");
      //               newCanvas.className = "page";
      //               pagesContainer?.appendChild(newCanvas);
      //               newCanvas.height = viewport.height;
      //               newCanvas.width = viewport.width;
      
      //               page.render({
      //                 canvasContext: newCanvas.getContext('2d') as CanvasRenderingContext2D,
      //                 viewport: viewport
      //               }).promise.then(() => {
      //                 console.log('Page rendered');
      //               });
      //             });
      //           })(i + 1);
      //         }
      //       });
      //     };
      
      //     fileReader.readAsArrayBuffer(file);
      //   }


      ngAfterViewInit(): void {
        const canvas = this.pdfCanvas.nativeElement;
        const context = canvas.getContext('2d');
      
        if (!context) {
          console.error('Unable to get 2D context for canvas');
          return;
        }
        console.log("function Called")
      
        const pdfUrl = '../../../../assets/CamScanner 02-07-2023 14.52.pdf'; // Replace with your PDF file URL
        this.renderPDF(pdfUrl, context);
      }
      
      private renderPDF(pdfUrl: string, context: CanvasRenderingContext2D): void {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
      
        loadingTask.promise.then((pdfDocument: any) => {
          const pageNumber = 1; // You can change this to render a different page
      
          pdfDocument.getPage(pageNumber).then((pdfPage: any) => {
            const viewport = pdfPage.getViewport({ scale: 1.5 });
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };
      
            pdfPage.render(renderContext).promise.then(() => {
              console.log(`Page ${pageNumber} rendered`);
            });
          });
        }).catch((error: any) => {
          console.error('Error loading PDF:', error);
        });
      }


    //   onPagesLoaded(event: any) {
    //     this.canvas = this._document.getElementsByTagName('canvas')[0];
    //     if (this.canvas) {
    //        const ctx = this.canvas.getContext('2d');
    
    //         if (ctx) {
    //            ctx.strokeStyle = 'black'
    //            ctx.lineWidth = 2;
    //             this.handleCanvasEvent();
    //         }
    //     }
    // }
      

}
