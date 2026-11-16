import { NgModule } from '@angular/core';
import { VirtualScrollerComponent } from './ngx-virtual-scroller.component';
import { VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY } from './ngx-virtual-scroller.interface';

@NgModule({
	declarations: [
		VirtualScrollerComponent
	],
	exports: [
		VirtualScrollerComponent
	],
	providers: [
		{
			provide: 'virtual-scroller-default-options',
			useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
		}
	]
})
export class VirtualScrollerModule { }
