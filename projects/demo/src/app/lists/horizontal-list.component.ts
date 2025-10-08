import { Component,Input } from '@angular/core';
import { BaseListComponent } from './base-list.component';

@Component({
  standalone: false,
  selector: 'horizontal-list',
  templateUrl: 'horizontal-list.component.html',
  styleUrls: ['./horizontal-list.scss']
})
export class HorizontalListComponent extends BaseListComponent {
  @Input() rtl: boolean;
}