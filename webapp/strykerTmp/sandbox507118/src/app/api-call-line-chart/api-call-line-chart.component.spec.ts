import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCallLineChartComponent } from './api-call-line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DxChartModule } from 'devextreme-angular';

describe('ApiCallLineChartComponent', () => {
  let component: ApiCallLineChartComponent;
  let fixture: ComponentFixture<ApiCallLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallLineChartComponent],
      imports: [HttpClientModule, DxChartModule]
    });
    fixture = TestBed.createComponent(ApiCallLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
