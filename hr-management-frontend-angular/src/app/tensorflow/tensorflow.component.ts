import { Component, OnInit, AfterViewInit, ElementRef, NgZone, ViewChild } from '@angular/core';
declare let ml5: any;


@Component({
  selector: 'app-tensorflow',
  templateUrl: './tensorflow.component.html',
  styleUrls: ['./tensorflow.component.css']
})
export class TensorflowComponent implements OnInit, AfterViewInit {

  public mobileNet;
  public classifier;
  public label;
  public confidence;
  public newLabel;
  public modelReady = false;
  public modelTrained = false;
  public currentProgress = 0;
  public loss: number;
  public iteration: number;
  @ViewChild('video') public video: ElementRef;
  @ViewChild('canvas') public canvas: ElementRef;
  public captures: Array<any>;
  constructor(private zone: NgZone) {
    this.captures = [];
  }
  ngOnInit(): void {
    this.mobileNet = ml5.featureExtractor('MobileNet', () => {
      console.log('model ready');
      
      this.classifier.load('./assets/newModel/moussaab.json', () => {
        console.log('custom model ready');
        this.modelReady = true;
        this.classify();
      });
    });
    this.classifier = this.mobileNet.classification(this.video.nativeElement, () => {
      console.log('Vidéo ready');
    });
  }
  classify() {
    this.classifier.classify((e, r) => {
      console.log('1 ready');
      this.gotResults(e, r);
      console.log('2 ready');
      if (r && r[0]) {
        console.log(this.label);
      }
    });
  }
  addImage() {
    this.classifier.addImage(this.newLabel);
    this.capture();
  }
  train() {
    this.iteration = 0; this.loss = 0;
    this.currentProgress = 0;
    this.classifier.train((loss) => {
      console.log(loss);
      if (loss == null) {
        this.iteration = 100;
        this.mobileNet.classify((e, r) => {
          this.gotResults(e, r);
        });
        this.modelTrained = true;
        alert("Model has been trained");
      } else {
        this.zone.run(() => {
          ++this.currentProgress;
          ++this.iteration;
          this.loss = loss;
        });
      }
    });
  }
  saveImage() {
    this.classifier.save(() => {
      console.log('model saved');
    },
      'moussaab');
  }
  public ngAfterViewInit() {
    console.log(webkitURL);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 320, 240);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
  }

  gotResults(err, results) {
    if (err) {
      console.log(err);
    } else {
      this.zone.run(() => {
        console.log('label', results[0].label);
        this.label = results[0].label;
        this.confidence = results[0].confidence;
      });
      this.mobileNet.classify((e, r) => {
        this.gotResults(e, r);
      });
    }
  }


}
