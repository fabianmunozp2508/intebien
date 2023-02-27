import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicaDieselComponent } from './mecanica-diesel.component';

describe('MecanicaDieselComponent', () => {
  let component: MecanicaDieselComponent;
  let fixture: ComponentFixture<MecanicaDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicaDieselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicaDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
