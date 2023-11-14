import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxOrgChartModule } from 'projects/ngx-org-chart/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
