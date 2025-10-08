import { Component } from '@angular/core';
import { BaseListComponent } from '../lists/base-list.component';

@Component({
  standalone: false,
  selector: 'parent-scroll',
  templateUrl: 'parent-scroll.component.html'
})
export class ParentScrollComponent extends BaseListComponent {
  constructor() {
	super();
	  
	this.items = BaseListComponent.generateMultipleRandomItems(10000);
    this.setToFullList();
  }
}