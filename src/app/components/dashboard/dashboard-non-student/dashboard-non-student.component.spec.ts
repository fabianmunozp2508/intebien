import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNonStudentComponent } from './dashboard-non-student.component';

describe('DashboardNonStudentComponent', () => {
  let component: DashboardNonStudentComponent;
  let fixture: ComponentFixture<DashboardNonStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNonStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNonStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
