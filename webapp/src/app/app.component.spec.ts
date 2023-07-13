import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CodingExperiencesComponent } from './coding-experiences/coding-experiences.component';
import { GoodHiringDecisionDonutComponent } from './good-hiring-decision-donut/good-hiring-decision-donut.component';
import { ApiCallLineChartComponent } from './api-call-line-chart/api-call-line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, DxChartModule, DxPieChartModule],
    declarations: [AppComponent, NavBarComponent, CodingExperiencesComponent, GoodHiringDecisionDonutComponent, ApiCallLineChartComponent, FooterComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'webapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('webapp');
  });

});
