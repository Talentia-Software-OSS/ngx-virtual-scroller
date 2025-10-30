import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { BaseListComponent } from '../lists/base-list.component';
import { ListItemComponent } from '../lists/list-item.component';

@Component({
    selector: 'parent-scroll',
    templateUrl: 'parent-scroll.component.html',
    imports: [NgIf,VirtualScrollerModule, ListItemComponent]
})
export class ParentScrollComponent extends BaseListComponent {
  constructor() {
	super();
	  
	this.items = BaseListComponent.generateMultipleRandomItems(10000);
    this.setToFullList();
  }
}