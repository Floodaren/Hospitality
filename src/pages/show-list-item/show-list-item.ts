import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';

@IonicPage()
@Component({
  selector: 'page-show-list-item',
  templateUrl: 'show-list-item.html',
})
export class ShowListItemPage {
  displayListItem:String = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,private alarmSound: AlarmSoundProvider) {
    this.displayListItem = navParams.get("itemToDisplay");
  }

  callHelp()
  {
    this.alarmSound.callHelp();
  }

}
