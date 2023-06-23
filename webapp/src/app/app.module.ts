import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CodingExperiencesComponent } from './coding-experiences/coding-experiences.component';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { GoodHiringDecisionDonutComponent } from './good-hiring-decision-donut/good-hiring-decision-donut.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CodingExperiencesComponent,
    GoodHiringDecisionDonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
