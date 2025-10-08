import { Component } from '@angular/core';
import { ListItem } from '../lists/list-item.component';
import { BaseListComponent } from '../lists/base-list.component';

@Component({
  standalone: false,
  selector: 'samples',
  templateUrl: 'samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent {
  public items: ListItem[] = [];

  constructor() {
	  this.items = BaseListComponent.generateMultipleRandomItems(10000);	  
  }
}