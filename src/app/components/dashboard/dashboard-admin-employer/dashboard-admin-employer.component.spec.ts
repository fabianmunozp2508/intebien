import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminEmployerComponent } from './dashboard-admin-employer.component';

describe('DashboardAdminEmployerComponent', () => {
  let component: DashboardAdminEmployerComponent;
  let fixture: ComponentFixture<DashboardAdminEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
