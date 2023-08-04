import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CodingExperiencesComponent } from './coding-experiences/coding-experiences.component';
import { DxChartModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { GoodHiringDecisionDonutComponent } from './good-hiring-decision-donut/good-hiring-decision-donut.component';
import { ApiCallLineChartComponent } from './api-call-line-chart/api-call-line-chart.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, NavBarComponent, CodingExperiencesComponent, GoodHiringDecisionDonutComponent, ApiCallLineChartComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, DxChartModule, DxPieChartModule, DxSelectBoxModule, HttpClientModule, HttpClientJsonpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}