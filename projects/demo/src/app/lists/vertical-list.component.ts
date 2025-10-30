import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { ListItemComponent } from './list-item.component';
import { BaseListComponent } from './base-list.component';

@Component({
    selector: 'vertical-list',
    templateUrl: 'vertical-list.component.html',
    imports: [NgIf, NgFor, VirtualScrollerModule, ListItemComponent]
})
export class VerticalListComponent extends BaseListComponent {
}