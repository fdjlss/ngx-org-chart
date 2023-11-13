import { Component, EventEmitter } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: ['./ngx-org-chart.component.scss']
})
export class NgxOrgChartComponent {

  nodes: INode[];
  hasParent = false;
  direction: 'vertical' | 'horizontal' = 'vertical';

  itemClick = new EventEmitter<INode>();
}
