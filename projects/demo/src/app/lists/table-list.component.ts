import { Component } from '@angular/core';
import { BaseListComponent } from './base-list.component';

@Component({
  standalone: false,
  selector: 'table-list',
  templateUrl: 'table-list.component.html',
  styleUrls: ['./table-list.scss']
})
export class TableListComponent extends BaseListComponent {
}