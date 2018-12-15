import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';
import { CategoryItemsProvider } from '../../providers/category-items/category-items';
import { ShowListItemPage } from '../show-list-item/show-list-item';


@IonicPage()
@Component({
  selector: 'page-kids-view',
  templateUrl: 'kids-view.html',
})
export class KidsViewPage {
  selectedItem: any;
  pageTitle: string;
  icons: string[];
  itemnames: string[];
  items: Array<{title: string}>;
  imageSource: './assets/imgs/answerPicture.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alarmSound: AlarmSoundProvider, categoryItem: CategoryItemsProvider) {
    this.selectedItem = navParams.get('itemnames');
    this.pageTitle = navParams.get('itemname');
    if (navParams.get('itemnames') == undefined)
    {
      this.itemnames = ["Leksaker","Mjukdjur","Spel","Ipad"];
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
    this.navCtrl.push(KidsViewPage, {
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
    switch (item.title)
    {
      case "Leksaker":
      this.pushPageWithInfo(['Jag vill ha en leksak'],'Leksaker');
      break;
      case 'Mjukdjur':
      this.pushPageWithInfo(['Jag vill ha ett mjukdjur'],"Mjukdjur");
      break;
      case 'Spel':
      this.pushPageWithInfo(['Jag vill spela ett spel'], "Spel");
      break;
      case 'Ipad':
      this.pushPageWithInfo(['Jag vill använda en ipad'], "Ipad");
      break;
      default:
      this.pushToShowText(item.title);
      break;
    }
  }
}
