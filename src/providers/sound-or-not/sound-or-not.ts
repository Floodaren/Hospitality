import { Injectable } from '@angular/core';


@Injectable()
export class SoundOrNotProvider {
  soundOrNot:boolean = true;
  constructor() {
    
  }
  SetSoundOnOff(onOff)
  {
    this.soundOrNot = onOff;
  }
  GetSoundOnOff()
  {
    return this.soundOrNot;
  }

}
