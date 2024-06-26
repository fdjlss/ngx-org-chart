import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-designer',
  templateUrl: './ngx-chart-designer.component.html',
  styleUrls: ['./ngx-chart-designer.component.scss']
})
export class NgxChartDesignerComponent {

  @Input() node: INode;
  @Input() hasParent = false;
  @Input() hasInnerStructure: boolean;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() detailsBtnTitle: string;

  @Output() detailsBtnClick = new EventEmitter<INode>();
  @Output() linkBtnClick = new EventEmitter<INode>();

  chartNodeClass: string;

  @HostBinding('style.flex-direction')
  get hostClass() {
    return this.direction === 'vertical' ? 'column' : '';
  }

  constructor() {
    this.chartNodeClass = `ngx-org-${ this.direction }`;
  }
}
