import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingExperiencesComponent } from './coding-experiences.component';
import { populationData } from './coding-experiences-data.service';
import { DxChartModule } from 'devextreme-angular';

describe('CodingExperiencesComponent', () => {
  let component: CodingExperiencesComponent;
  let fixture: ComponentFixture<CodingExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingExperiencesComponent],
      imports: [DxChartModule]
    });
    fixture = TestBed.createComponent(CodingExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets population data', () => {
    expect(component.populationData).toEqual(populationData);
  });
});
