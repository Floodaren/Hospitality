import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PainViewPage } from './pain-view';

@NgModule({
  declarations: [
    PainViewPage
  ],
  imports: [
    IonicPageModule.forChild(PainViewPage)
  ],
})
export class PainViewPageModule {}
