import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { VirtualScrollerModule } from '@talentia/ngx-virtual-scroller';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const customDefaultOptions = {
	scrollThrottlingTime: 0,
	scrollDebounceTime: 0,
	scrollAnimationTime: 750,
	checkResizeInterval: 1000,
	resizeBypassRefreshThreshold: 5,
	modifyOverflowStyleOfParentScroll: true,
	stripedTable: false
};



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, VirtualScrollerModule),
        {
            provide: 'virtual-scroller-default-options',
            useValue: customDefaultOptions
        }
    ]
})
  .catch(err => console.error(err));
