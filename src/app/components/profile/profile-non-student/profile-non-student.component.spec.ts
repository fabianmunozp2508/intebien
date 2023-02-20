import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNonStudentComponent } from './profile-non-student.component';

describe('ProfileNonStudentComponent', () => {
  let component: ProfileNonStudentComponent;
  let fixture: ComponentFixture<ProfileNonStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNonStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNonStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
