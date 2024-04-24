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

  @Output() detailsBtnClick = new EventEmitter<INode>();
  @Output() linkBtnClick = new EventEmitter<INode>();

  containerClass: string;
  connectorToParentHeight = "1em";
  maxHeightEm = 19.2;

  // factor 1 -> height 19.2 (0.1+0.1 + 1+1+1 + 15)
  // factor 2 -> height 19.2*2 - 1
  // factor 3 -> height 19.2*3 - 2

  constructor() {
    this.containerClass = `ngx-org-connector-${this.direction}`;
  }
  
  ngOnInit() {
    if (this.hasInnerStructure && this.node.heightFactor) {
      let newHeight = this.node.heightFactor * this.maxHeightEm;
      if (this.node.heightFactor >= 2) newHeight -= this.node.heightFactor-1;
      this.connectorToParentHeight = `${newHeight}em`;
    }
  }


}
