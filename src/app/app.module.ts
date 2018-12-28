import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WriteOwnTextPage } from '../pages/write-own-text/write-own-text';
import { PainViewPage } from '../pages/pain-view/pain-view';
import { AnswerviewPage } from '../pages/answerview/answerview';
import { BodyviewPage } from '../pages/bodyview/bodyview';
import { NeedViewPage } from '../pages/need-view/need-view';
import { WantToKnowViewPage } from '../pages/want-to-know-view/want-to-know-view';
import { ShowListItemPage } from '../pages/show-list-item/show-list-item';
import { KidsViewPage } from '../pages/kids-view/kids-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlarmSoundProvider } from '../providers/alarm-sound/alarm-sound';
import { CategoryItemsProvider } from '../providers/category-items/category-items';
import { SoundOrNotProvider } from '../providers/sound-or-not/sound-or-not';
import { TranslationsProvider } from '../providers/translations/translations';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WriteOwnTextPage,
    PainViewPage,
    AnswerviewPage,
    BodyviewPage,
    NeedViewPage,
    WantToKnowViewPage,
    ShowListItemPage,
    KidsViewPage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WriteOwnTextPage,
    PainViewPage,
    AnswerviewPage,
    BodyviewPage,
    NeedViewPage,
    WantToKnowViewPage,
    ShowListItemPage,
    KidsViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    AlarmSoundProvider,
    CategoryItemsProvider,
    PainViewPage,
    AnswerviewPage,
    SoundOrNotProvider,
    TranslationsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
