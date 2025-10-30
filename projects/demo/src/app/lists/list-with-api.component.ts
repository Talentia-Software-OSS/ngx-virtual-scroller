import { Component, OnChanges } from '@angular/core';
import { BaseListComponent } from './base-list.component';
import { IPageInfo, VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { ListItemComponent } from './list-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'list-with-api',
    templateUrl: 'list-with-api.component.html',
    styleUrls: ['./list-with-api.scss'],
    imports: [NgIf, NgFor, VirtualScrollerModule, ListItemComponent]
})
export class ListWithApiComponent extends BaseListComponent implements OnChanges {
  public shouldPrependItems = false;
  public timer;
  public loading = false;

  public ngOnChanges() {
	this.filteredList = [];
    this.reset();
  }

  private reset() {
    this.fetchNextChunk();
  }

  public fetchMore(event: IPageInfo) {
    if (this.shouldPrependItems && event.startIndex === 0) {
      this.fetchNextChunk();
    }
    if (!this.shouldPrependItems && event.endIndex === this.filteredList.length - 1) {
      this.fetchNextChunk();
    }
  }

  private fetchNextChunk(): void {
    this.loading = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.loading = false;
      if (this.shouldPrependItems) {
        this.prependItems();
      }
      else {
        this.appendItems();
      }
    }, 1000 + Math.random() * 1000);
  }
}