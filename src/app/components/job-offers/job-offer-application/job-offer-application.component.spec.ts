import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferApplicationComponent } from './job-offer-application.component';

describe('JobOfferApplicationComponent', () => {
  let component: JobOfferApplicationComponent;
  let fixture: ComponentFixture<JobOfferApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
