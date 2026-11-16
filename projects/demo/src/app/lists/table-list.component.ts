import { Component } from '@angular/core';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { BaseListComponent } from './base-list.component';

@Component({
    selector: 'table-list',
    templateUrl: 'table-list.component.html',
    styleUrls: ['./table-list.scss'],
    imports: [VirtualScrollerModule]
})
export class TableListComponent extends BaseListComponent {
}