import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';
import { CategoryItemsProvider } from '../../providers/category-items/category-items';
import { WriteOwnTextPage } from '../write-own-text/write-own-text';
import { ShowListItemPage } from '../show-list-item/show-list-item';

@IonicPage()
@Component({
  selector: 'page-want-to-know-view',
  templateUrl: 'want-to-know-view.html',
})
export class WantToKnowViewPage {
  pageTitle: string;
  selectedItem: any;
  icons: string[];
  itemnames: string[];
  items: Array<{title: string}>;
  imageSource: './assets/imgs/answerPicture.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alarmSound: AlarmSoundProvider, categoryItem: CategoryItemsProvider) {
    this.selectedItem = navParams.get('itemnames');
    this.pageTitle = navParams.get('itemname');
    if (navParams.get('itemnames') == undefined)
    {
      this.itemnames = ["Barnen","Föräldrar","Hemmet","Kommunikation","Kusiner","Läkemedel"];
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

  pushPageWithInfo(itemList, itemName)
  {
    this.navCtrl.push(WantToKnowViewPage, {
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
      case "Läkemedel":
      this.pushPageWithInfo(['Mediciner','Infusioner','Injektioner','Sugkateter','Sond','Sondmat','Undersökning','Röntgen','Operation','Provsvar'], "Läkemedel");
      break;
      case "Kusiner":
      this.pushPageWithInfo(['Hur mår mina kusiner?','Vart är mina kusiner?', 'Vem passar mina barn?'], "Kusiner");
      break;
      case "Föräldrar":
      this.pushPageWithInfo(['Hur mår mina barn?','Vart är mina barn?', 'Vem passar mina barn?', 'Hur mår mina husdjur?','Hur mår mina föräldrar?','Hur mår mina kusiner?'], "Familjen");
      break;
      case "Barnen":
      this.pushPageWithInfo(['Hur mår mina barn?','Vart är mina barn?', 'Vem passar mina barn?'], "Barnen");
      break;
      case 'Hemmet':
      this.pushPageWithInfo(['Vem hämtar min post?','Vem betalar mina räkningar?','Vart är min bil?','Vem tar hand om min trädgård?','Vem tar hand om huset?'], "Hemmet");
      break;
      case 'Kommunikation':
      this.pushPageWithInfo(['Jag vill tala med en läkare','Jag vill tala med en sjuksköterska','Jag vill tala med en präst','Jag vill tala med en kurator'], "Kommunikation");
      break;
      case 'Läkare':
      case 'Sjuksköterska':
      case 'Präst':
      case 'Kurator':
      this.navCtrl.push(WriteOwnTextPage);
      break;
      default:
      this.pushToShowText(item.title);
      break;
    }
  }
}
