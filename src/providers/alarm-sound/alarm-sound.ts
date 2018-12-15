import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { SoundOrNotProvider } from '../sound-or-not/sound-or-not';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlarmSoundProvider {
  playingHelpSound:boolean = false;
  constructor(private nativeAudio: NativeAudio, private SoundOrNotProvider: SoundOrNotProvider, private alertCtrl: AlertController) {
    this.nativeAudio.preloadSimple('helpSound', 'assets/audio/alarm2.mp3').then(() => console.log(), (e) => console.log(e));  
  }

  callHelp()
  {
    if (this.SoundOrNotProvider.GetSoundOnOff() == true)
    {
      if (this.playingHelpSound === false)
      {
        this.nativeAudio.play('helpSound');
        this.playingHelpSound = true;
        //The timeout is set to five seconds so that you cannot call this function all the time
        setTimeout(() => {
          this.playingHelpSound = false;  
        }, 5000);
      }
    }
  }

  //Method used to check if there is some error on a tablet. 
  presentAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'error',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
