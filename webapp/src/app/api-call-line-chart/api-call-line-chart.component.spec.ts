import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCallLineChartComponent } from './api-call-line-chart.component';

describe('ApiCallLineChartComponent', () => {
  let component: ApiCallLineChartComponent;
  let fixture: ComponentFixture<ApiCallLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallLineChartComponent]
    });
    fixture = TestBed.createComponent(ApiCallLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
