import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';
import { NativeAudio } from '@ionic-native/native-audio';
import { SoundOrNotProvider } from '../../providers/sound-or-not/sound-or-not';


@IonicPage()
@Component({
  selector: 'page-answerview',
  templateUrl: 'answerview.html',
})
export class AnswerviewPage {
  playingAnswerSound:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alarmSound: AlarmSoundProvider, private nativeAudio: NativeAudio, private SoundOrNotProvider: SoundOrNotProvider) {
    this.nativeAudio.preloadSimple('yesSound', 'assets/audio/answerSounds/JA.mp3').then(() => console.log(), (e) => console.log(e));   
    this.nativeAudio.preloadSimple('noSound', 'assets/audio/answerSounds/NEJ.mp3').then(() => console.log(), (e) => console.log(e));   
    this.nativeAudio.preloadSimple('maybeSound', 'assets/audio/answerSounds/KANSKE.mp3').then(() => console.log(), (e) => console.log(e));   
    this.nativeAudio.preloadSimple('okSound', 'assets/audio/answerSounds/OKEJ.mp3').then(() => console.log(), (e) => console.log(e));   
  }

  answer(inputAnswer)
  {
    if (this.SoundOrNotProvider.GetSoundOnOff() == true)
    {
      switch(inputAnswer)
      {
        case "yes":
        this.playsound('yesSound');   
        break;
        case "no":
        this.playsound('noSound');   
        break;
        case "maybe":
        this.playsound('maybeSound');   
        break;
        case "ok":
        this.playsound('okSound');   
        break; 
        default:
        console.log("no answer pressed");
        break;
      }
    }
  }

  playsound(soundInput)
  {
    if (this.playingAnswerSound === false)
    {
      this.nativeAudio.play(soundInput);
      this.playingAnswerSound = true;
      //The timeout is set to three seconds so that you cannot call this function all the time
      setTimeout(() => {
        this.playingAnswerSound = false;  
      }, 3000);
    }
  }

  callHelp()
  {
    this.alarmSound.callHelp();
  }

}
