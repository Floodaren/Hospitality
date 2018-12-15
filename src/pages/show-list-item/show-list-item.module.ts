import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowListItemPage } from './show-list-item';

@NgModule({
  declarations: [
    ShowListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowListItemPage),
  ],
})
export class ShowListItemPageModule {}
