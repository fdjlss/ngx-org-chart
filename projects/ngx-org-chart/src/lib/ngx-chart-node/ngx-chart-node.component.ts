import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-node',
  templateUrl: './ngx-chart-node.component.html',
  styleUrls: ['./ngx-chart-node.component.scss']
})
export class NgxChartNodeComponent {

  @Input()
  node: INode;

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() detailsBtnClick = new EventEmitter<INode>();
  @Output() extLinkClick = new EventEmitter<INode>();

  containerClass: string;

  constructor() {
    this.containerClass = `ngx-org-connector-${this.direction}`
  }

}
