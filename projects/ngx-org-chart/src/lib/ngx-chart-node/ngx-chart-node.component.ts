import { Component, EventEmitter } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-node',
  templateUrl: './ngx-chart-node.component.html',
  styleUrls: ['./ngx-chart-node.component.scss']
})
export class NgxChartNodeComponent {

  node: INode;
  hasParent = false;
  direction: 'vertical' | 'horizontal' = 'vertical';

  itemClick = new EventEmitter<INode>();

  containerClass: string

  constructor() {
    this.containerClass = `ngx-org-connector-${this.direction}`
  }
}
