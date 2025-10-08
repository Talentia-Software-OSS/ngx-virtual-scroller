import { Component } from '@angular/core';
import { BaseListComponent } from './base-list.component';

@Component({
  standalone: false,
  selector: 'vertical-list',
  templateUrl: 'vertical-list.component.html'
})
export class VerticalListComponent extends BaseListComponent {
}