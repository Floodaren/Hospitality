import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsViewPage } from './kids-view';

@NgModule({
  declarations: [
    KidsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(KidsViewPage),
  ],
})
export class KidsViewPageModule {}
