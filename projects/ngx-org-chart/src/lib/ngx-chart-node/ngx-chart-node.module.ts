import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartNodeComponent } from './ngx-chart-node.component';

@NgModule({
  declarations: [NgxChartNodeComponent],
  imports: [CommonModule],
  bootstrap: [NgxChartNodeComponent],
  exports: [NgxChartNodeComponent]
})
export class NgxChartNodeModule { }
