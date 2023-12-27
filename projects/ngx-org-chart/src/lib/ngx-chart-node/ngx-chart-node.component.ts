import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-node',
  templateUrl: './ngx-chart-node.component.html',
  styleUrls: ['./ngx-chart-node.component.scss']
})
export class NgxChartNodeComponent {

  @Input() node: INode;
  @Input() hasParent: boolean;
  @Input() hasInnerStructure: boolean;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() detailsBtnTitle: string;
  @Input() linkBtnTitle: string;

  @Output() detailsBtnClick = new EventEmitter<INode>();
  @Output() linkBtnClick = new EventEmitter<INode>();

  containerClass: string;
  connectorToParentHeight = "4em";
  privilegedOrderedPositions = ["gerente", "super", "jefe"];

  constructor() {
    this.containerClass = `ngx-org-connector-${this.direction}`;
  }
  
  ngOnInit() {
    if (this.hasInnerStructure) {
      const nodePosition = this.node.title.toLowerCase();
      const indexOfOrderedPosition = this.privilegedOrderedPositions.findIndex(pos => nodePosition.includes(pos));
      if (indexOfOrderedPosition !== -1) {
        this.connectorToParentHeight = `${indexOfOrderedPosition*1.5}em`;
      }
    }
  }


}
