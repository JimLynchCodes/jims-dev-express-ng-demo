import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodHiringDecisionDonutComponent } from './good-hiring-decision-donut.component';
import { DxChartModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';

describe('GoodHiringDecisionDonutComponent', () => {
  let component: GoodHiringDecisionDonutComponent;
  let fixture: ComponentFixture<GoodHiringDecisionDonutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoodHiringDecisionDonutComponent
      ], 
      imports: [
        DxPieChartModule
      ]
    });
    fixture = TestBed.createComponent(GoodHiringDecisionDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
