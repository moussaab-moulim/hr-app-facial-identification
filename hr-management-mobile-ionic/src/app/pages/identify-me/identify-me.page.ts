import { Component, OnInit, ElementRef, NgZone, AfterViewInit, ViewChild } from '@angular/core';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
declare let ml5: any;

@Component({
  selector: 'app-identify-me',
  templateUrl: './identify-me.page.html',
  styleUrls: ['./identify-me.page.scss'],
})
export class IdentifyMePage implements OnInit, AfterViewInit {
  @ViewChild('video') public video: ElementRef;

  currentImage: any;
  public mobileNet;
  public classifier;
  public label;
  public confidence;
  public name;
  public employee: any = null;
  picture: any;
  cameraOpt = {
    width: window.screen.width,
    height: window.screen.height,
  };
  cl: boolean;

  constructor(private zone: NgZone, private androidPermissions: AndroidPermissions,
    private empService: EmployeeService, private router: Router,
    private platform: Platform) {


    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        );
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
      });
    }
  }


  ngOnInit() {
    this.mobileNet = ml5.featureExtractor('MobileNet', () => {
      console.log('model ready');
      this.classifier.load('./assets/newModel/moussaab.json', () => {
        console.log('custom model ready');
        //this.cl = true;
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
      
    });
  }
  ngAfterViewInit(): void {

    this.initWebRTC();
  }
  initWebRTC() {
    const constraints = {
      video: true,
      audio: false
    };
    const handleSuccess = (stream: MediaStream) => {
      (window as any).stream = stream; // make stream available to browser console
      this.video.nativeElement.srcObject = stream;
      this.video.nativeElement.play();
    };

    const handleError = (error: any) => {
      console.log('navigator.getUserMedia error: ', error.name + ', ' + error.message);

    };

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  }




  gotResults(err, results) {
    if (err) {
      console.log(err);
    } else {
      this.zone.run(() => {
        this.label = results[0].label;
        this.confidence = results[0].confidence;

        console.log(this.label);
        this.empService.getEmployeeDetails(this.label).subscribe(data => {
          this.employee = data;
          console.log(this.employee);
          this.name = this.employee.firstName + ' ' + this.employee.lastName;
        });
      });
      this.mobileNet.classify((e, r) => {
        this.gotResults(e, r);

      });
    }
  }

  // Consulter un employe
  goToProfil(emp) {
    this.router.navigateByUrl('/tabs/employees/' + emp);
  }

}
