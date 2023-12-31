import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCallLineChartComponent } from './api-call-line-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DxChartModule } from 'devextreme-angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ApiCallLineChartComponent', () => {
  let component: ApiCallLineChartComponent;
  let fixture: ComponentFixture<ApiCallLineChartComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallLineChartComponent],
      imports: [HttpClientTestingModule, DxChartModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ApiCallLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
