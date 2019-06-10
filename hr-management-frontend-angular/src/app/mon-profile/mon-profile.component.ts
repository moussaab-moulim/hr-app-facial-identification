import { Component, OnInit, AfterViewInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
declare let ml5: any;

@Component({
  selector: 'app-mon-profile',
  templateUrl: './mon-profile.component.html',
  styleUrls: ['./mon-profile.component.css']
})
export class MonProfileComponent implements OnInit, AfterViewInit {

  public mobileNet;
  public classifier;
  public label;
  public confidence;
  public name;
  public employee: any = null;

  @ViewChild('video') public video: ElementRef;
  @ViewChild('canvas') public canvas: ElementRef;
  constructor(private zone: NgZone, private empService: DataService, private router: Router) { }

  ngOnInit() {
    this.mobileNet = ml5.featureExtractor('MobileNet', () => {
      console.log('model ready');
      this.classifier.load('./assets/newModel/moussaab.json', () => {
        console.log('custom model ready');
      });
    });
    this.classifier = this.mobileNet.classification(this.video.nativeElement, () => {
      console.log('Vidéo ready');
      this.classifier.classify((e, r) => {
        this.gotResults(e, r);
        if (r && r[0]) {
          this.empService.getEmployeeById(this.label).subscribe(data => {
            this.employee = data;
            this.name = this.employee.firstName + ' ' + this.employee.lastName;
          });
        }
      });

    });
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
  gotResults(err, results) {
    if (err) {
      console.log(err);
    } else {
      this.zone.run(() => {
        this.label = results[0].label;
        this.confidence = results[0].confidence;

      });
      this.mobileNet.classify((e, r) => {
        this.gotResults(e, r);

      });
    }
  }
  //Consulter un employe 
  goToProfil(emp) {

    const url: any = emp._links.self.href;
    this.router.navigateByUrl('/consulterEmp/' + btoa(url));

  }

}
