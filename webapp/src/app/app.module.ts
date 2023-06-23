import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CodingExperiencesComponent } from './coding-experiences/coding-experiences.component';
import { DxChartModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { GoodHiringDecisionDonutComponent } from './good-hiring-decision-donut/good-hiring-decision-donut.component';
import { ApiCallLineChartComponent } from './api-call-line-chart/api-call-line-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CodingExperiencesComponent,
    GoodHiringDecisionDonutComponent,
    ApiCallLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
    DxPieChartModule,
    DxSelectBoxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
