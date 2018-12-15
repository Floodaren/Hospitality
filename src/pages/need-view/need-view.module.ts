import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedViewPage } from './need-view';

@NgModule({
  declarations: [
    NeedViewPage
  ],
  imports: [
    IonicPageModule.forChild(NeedViewPage)
  ],
})
export class NeedViewPageModule {}
