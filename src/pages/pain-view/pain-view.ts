import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound'


@IonicPage()
@Component({
  selector: 'page-pain-view',
  templateUrl: 'pain-view.html',
})
export class PainViewPage {
  painSection:string = "";
  picturePath:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams ,private alarmSound: AlarmSoundProvider) {
    this.painSection = navParams.get('painSection');
    if (this.painSection == "Insidan")
    {
      this.picturePath = "./assets/imgs/inside-body.png";
    }
    else 
    {
      this.picturePath = "./assets/imgs/painpic.png";
    }
  }

  callHelp()
  {
    this.alarmSound.callHelp();
  }

}
