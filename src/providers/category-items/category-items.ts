import { Injectable } from '@angular/core';


@Injectable()
export class CategoryItemsProvider {
  items: Array<{title: string}>;
  constructor() {
  }

  fillListView(iconNames:string[],)
  {
    this.items = [];
    for (var i = 0; i<iconNames.length;i++)
    {
      this.items.push({
        title: iconNames[i]
      });
    }
    return this.items;
  }
}
