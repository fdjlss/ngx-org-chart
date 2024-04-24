import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: ['./ngx-org-chart.component.scss']
})
export class NgxOrgChartComponent {

  @Input() nodes: INode[];
  @Input() hasInnerStructure = false;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() detailsBtnTitle = "See details";

  @Output() detailsBtnClick = new EventEmitter<INode>();
  @Output() linkBtnClick = new EventEmitter<INode>();
}
