import { Component } from '@angular/core';
import { BaseListComponent } from './base-list.component';

@Component({
  standalone: false,
  selector: 'multi-col-list',
  templateUrl: 'multi-col-list.component.html',
  styleUrls: ['./multi-col-list.scss']
})
export class MultiColListComponent extends BaseListComponent {
}