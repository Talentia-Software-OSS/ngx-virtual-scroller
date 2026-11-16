import { Component,Input } from '@angular/core';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { BaseListComponent } from './base-list.component';
import { ListItemComponent } from './list-item.component';

@Component({
    selector: 'horizontal-list',
    templateUrl: 'horizontal-list.component.html',
    styleUrls: ['./horizontal-list.scss'],
    imports: [VirtualScrollerModule, ListItemComponent]
})
export class HorizontalListComponent extends BaseListComponent {
  @Input() rtl: boolean;
}