import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxOrgChartModule } from 'projects/ngx-org-chart/src/public-api';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
