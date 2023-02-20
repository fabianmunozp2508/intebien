import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferInterviewComponent } from './job-offer-interview.component';

describe('JobOfferInterviewComponent', () => {
  let component: JobOfferInterviewComponent;
  let fixture: ComponentFixture<JobOfferInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
