import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alarmSound: AlarmSoundProvider) {

  }

  callHelp()
  {
    this.alarmSound.callHelp();
  }

  hospitalPics = [
    './assets/imgs/hospital_slide5.jpg',
    './assets/imgs/hospital_slide1.jpg',
    './assets/imgs/hospital_slide2.jpg',
    './assets/imgs/hospital_slide3.jpg',
    './assets/imgs/hospital_slide4.jpg'
];

}
