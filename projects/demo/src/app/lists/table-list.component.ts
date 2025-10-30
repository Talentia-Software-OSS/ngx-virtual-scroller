import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { BaseListComponent } from './base-list.component';

@Component({
    selector: 'table-list',
    templateUrl: 'table-list.component.html',
    styleUrls: ['./table-list.scss'],
    imports: [NgFor, VirtualScrollerModule]
})
export class TableListComponent extends BaseListComponent {
}