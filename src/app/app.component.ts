import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WriteOwnTextPage } from '../pages/write-own-text/write-own-text';
import { BodyviewPage } from '../pages/bodyview/bodyview';
import { AnswerviewPage } from '../pages/answerview/answerview';
import { NeedViewPage } from '../pages/need-view/need-view';
import { WantToKnowViewPage } from '../pages/want-to-know-view/want-to-know-view';
import { KidsViewPage } from '../pages/kids-view/kids-view';

import { SoundOrNotProvider } from '../providers/sound-or-not/sound-or-not';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {
  @ViewChild(Nav) nav: Nav;

  soundOrNotVar:boolean = true;
  rootPage = HomePage;
  pages: Array<{title: string, component: any, icon: string, active: boolean}>;
  activePage = new Subject();
  activePageSubScriber: Subscription;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private SoundOrNotProvider: SoundOrNotProvider) {}
  
  ngOnInit() {
    this.activePageSubScriber = this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.pages = [
      { title: 'Hem', component: HomePage, icon: 'home', active: true },
      { title: 'Svara', component: AnswerviewPage, icon: 'chatbubbles', active: false },
      { title: 'Kroppen', component: BodyviewPage, icon: 'clipboard', active: false },
      { title: 'Behov', component: NeedViewPage, icon : 'hand', active: false},
      { title: 'Vill veta', component: WantToKnowViewPage, icon: 'school', active: false},
      { title: "Barn", component: KidsViewPage, icon: 'football', active: false },
      { title: 'Fritext', component: WriteOwnTextPage, icon: 'brush', active: false }
    ];
  }

  ngOnDestroy() {
    this.activePageSubScriber.unsubscribe();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  soundOrNot()
  {
    this.SoundOrNotProvider.SetSoundOnOff(this.soundOrNotVar);
  }
}
