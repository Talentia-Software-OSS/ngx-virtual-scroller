import { Component } from '@angular/core';
import { ListItem } from '../lists/list-item.component';
import { BaseListComponent } from '../lists/base-list.component';
import { VerticalListComponent } from '../lists/vertical-list.component';
import { HorizontalListComponent } from '../lists/horizontal-list.component';
import { MultiColListComponent } from '../lists/multi-col-list.component';
import { TableListComponent } from '../lists/table-list.component';
import { ListWithApiComponent } from '../lists/list-with-api.component';

@Component({
    selector: 'samples',
    templateUrl: 'samples.component.html',
    styleUrls: ['./samples.component.scss'],
    imports: [VerticalListComponent, HorizontalListComponent, MultiColListComponent, TableListComponent, ListWithApiComponent]
})
export class SamplesComponent {
  public items: ListItem[] = [];

  constructor() {
	  this.items = BaseListComponent.generateMultipleRandomItems(10000);	  
  }
}