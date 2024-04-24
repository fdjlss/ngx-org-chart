import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartNodeComponent } from './ngx-chart-node.component';
import { UsersIconComponent } from './users-icon/users-icon.component';

@NgModule({
  declarations: [NgxChartNodeComponent, UsersIconComponent],
  imports: [CommonModule],
  bootstrap: [NgxChartNodeComponent],
  exports: [NgxChartNodeComponent]
})
export class NgxChartNodeModule { }
