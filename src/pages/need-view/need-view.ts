import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';
import { CategoryItemsProvider } from '../../providers/category-items/category-items';
import { ShowListItemPage } from '../show-list-item/show-list-item';

@IonicPage()
@Component({
  selector: 'page-need-view',
  templateUrl: 'need-view.html',
})
export class NeedViewPage {
  selectedItem: any;
  pageTitle: string;
  buttonColor = "black";
  icons: string[];
  itemnames: string[];
  items: Array<{title: string}>;
  imageSource: './assets/imgs/answerPicture.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams, private alarmSound: AlarmSoundProvider, categoryItem: CategoryItemsProvider) {
    this.selectedItem = navParams.get('itemnames');
    this.pageTitle = navParams.get('itemname');
    if (navParams.get('itemnames') == undefined)
    {
      this.itemnames = ["Kosmetik","Lyssna","Läsa","Mobil","TV"];
    }
    else 
    {
      this.itemnames = navParams.get('itemnames');
    }    
    this.items = categoryItem.fillListView(this.itemnames);
  }

  images = [
    {
      imageSource: './assets/imgs/answerPicture.jpg'
    }
  ]

  callHelp()
  {
    this.alarmSound.callHelp();
  }

  pushPageWithInfo(itemList,itemName)
  {
    this.navCtrl.push(NeedViewPage, {
      itemnames: itemList,
      itemname: itemName
    });
  }

  pushToShowText(chosenItem)
  {
    this.navCtrl.push(ShowListItemPage, {
      itemToDisplay: chosenItem
    });
  }

  itemTapped(event, item) {
    //console.log(item.title);
    switch (item.title)
    {
      case "Kosmetik":
      this.pushPageWithInfo(['Jag vill ha mina glasögon','Jag vill ha min hörapparat','Jag vill ha mina löständer'],"Kosmetik");
      break;
      case "TV":
      this.pushPageWithInfo(['Kan du starta TV-apparaten?','Kan du stänga av TV-apparaten?','Kan du växla en kanal upp?','Kan du växla en kanal ned?', 'Kan du höja volymen?', 'Kan du sänka volymen?'], "TV");
      break;
      case 'Lyssna':
      this.pushPageWithInfo(['Jag vill ha mina hörlurar','Jag vill lyssna på ljudbok','Jag vill lyssna på musik','Jag vill lyssna på podcast', 'Jag vill lyssna på radio', 'Jag vill ha tystnad'], "Lyssna");
      break;
      case 'Mobil':
      this.pushPageWithInfo(['Jag vill ha min mobil','Jag vill ringa ett samtal','Jag vill skicka ett meddelande', 'Jag vill spela mobilspel', 'Har någon ringt min telefon?', 'Jag vill ladda min telefon'], "Mobil");
      break;
      case 'Läsa':
      this.pushPageWithInfo(['Jag vill läsa en bok','Jag vill läsa en tidning', 'Jag vill läsa en serietidning'], "Läsa");
      break;
      default:
      this.pushToShowText(item.title);
      break;
    }
  }
}
