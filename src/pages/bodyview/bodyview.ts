import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmSoundProvider } from '../../providers/alarm-sound/alarm-sound';
import { CategoryItemsProvider } from '../../providers/category-items/category-items';
import { PainViewPage } from '../pain-view/pain-view';
import { ShowListItemPage } from '../show-list-item/show-list-item';

@IonicPage()
@Component({
  selector: 'page-bodyview',
  templateUrl: 'bodyview.html',
})
export class BodyviewPage {
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
      this.itemnames = ["Andningsproblem","Hunger och törst","Hygien","Känslor","Smärta","Sängläge","Toalett"];
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
    this.navCtrl.push(BodyviewPage, {
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
      case "Andningsproblem":
      this.pushPageWithInfo(['Jag har svårt att andas','Jag har slem i halsen','Det gör ont när jag andas'], "Andningsproblem");
      break;
      case 'Hunger och törst':
      this.pushPageWithInfo(['Jag vill dricka','Jag är hungrig', 'Jag är törstig', 'Jag vill äta'],"Hunger och törst");
      break;
      case 'Hygien':
      this.pushPageWithInfo(['Jag vill duscha','Jag vill borsta tänderna','Jag vill tvätta håret', 'Jag vill kamma håret','Jag vill tvätta händerna','Jag vill byta kläder'], "Hygien");
      break;
      case 'Känslor':
      this.pushPageWithInfo(['Jag mår bra', 'Jag mår dåligt','Jag är nervös','Jag har ångest','Jag känner mig trött','Jag känner mig orolig'], "Känslor");
      break;
      case "Smärta":
      this.pushPageWithInfo(['Insidan av kroppen','Utsidan av kroppen'], "Smärta");
      break;
      case 'Sängläge':
      this.pushPageWithInfo(['Jag vill höja min huvudända','Jag vill sänka min huvudända', 'Jag vill ligga i sidoläge','Jag vill sitta upp på sängkanten','Jag vill sitta upp i stol','Jag vill sitta i rullstol'], "Sängläge");
      break;
      case 'Toalett':
      this.pushPageWithInfo(['Jag behöver att kissa','Jag behöver att bajsa'],"Toalett");
      break;
      case 'Insidan av kroppen':
      this.navCtrl.push(PainViewPage, {
        painSection: "Insidan",
        imageSource: "assets/imgs/answerPicture.jpg"
      });
      break;
      case 'Utsidan av kroppen':
      this.navCtrl.push(PainViewPage, {
        painSection: "Utsidan",
        imageSource: "./assets/imgs/answerPicture.jpg"
      });
      break;
      default:
      this.pushToShowText(item.title);
      break;
    }
  }
}
