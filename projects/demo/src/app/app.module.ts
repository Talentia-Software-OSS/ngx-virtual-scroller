import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalListComponent } from './lists/horizontal-list.component';
import { ListItemComponent } from './lists/list-item.component';
import { ListWithApiComponent } from './lists/list-with-api.component';
import { MultiColListComponent } from './lists/multi-col-list.component';
import { TableListComponent } from './lists/table-list.component';
import { VerticalListComponent } from './lists/vertical-list.component';
import { SamplesComponent } from './samples/samples.component';
import { ParentScrollComponent } from './parent/parent-scroll.component';

const customDefaultOptions = {
	scrollThrottlingTime: 0,
	scrollDebounceTime: 0,
	scrollAnimationTime: 750,
	checkResizeInterval: 1000,
	resizeBypassRefreshThreshold: 5,
	modifyOverflowStyleOfParentScroll: true,
	stripedTable: false
};

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    ParentScrollComponent,
    ListItemComponent,
    ListWithApiComponent,
    MultiColListComponent,
    TableListComponent,
    VerticalListComponent,
    HorizontalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VirtualScrollerModule
  ],
  providers: [
    {
		  provide: 'virtual-scroller-default-options', 
      useValue: customDefaultOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
