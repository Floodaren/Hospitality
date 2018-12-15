import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';

@IonicPage()
@Component({
  selector: 'page-write-own-text',
  templateUrl: 'write-own-text.html'
})

export class WriteOwnTextPage {
  messageToArray: string;
  //timeStamp: string;
  messageArray: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alarmSound: AlarmSoundProvider) {
    //this.timeStamp = new Date().toISOString();
  }
  
  callHelp()
  {
    this.alarmSound.callHelp();
  }

  deleteMessages(item:string){
    const index: number = this.messageArray.indexOf(item);
    if (index !== -1) {
        this.messageArray.splice(index, 1);
    }   
  }

  sendMessage()
  {
    //this.timeStamp += " " + this.messageToArray;

    if(this.messageToArray != null && this.messageToArray != ""){
      this.messageArray.push(this.messageToArray);
    }
    
    if (this.messageArray.length > 5)
    {
      this.messageArray = [];
      this.messageArray.push(this.messageToArray);
    }
    this.messageToArray = "";
  }
}
