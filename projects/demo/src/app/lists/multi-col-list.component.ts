import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { ListItemComponent } from './list-item.component';
import { BaseListComponent } from './base-list.component';


@Component({
    selector: 'multi-col-list',
    templateUrl: 'multi-col-list.component.html',
    styleUrls: ['./multi-col-list.scss'],
    imports: [NgIf, NgFor, VirtualScrollerModule, ListItemComponent]
})
export class MultiColListComponent extends BaseListComponent {
}