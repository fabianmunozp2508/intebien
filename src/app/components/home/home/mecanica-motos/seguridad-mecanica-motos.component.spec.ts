import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadMecanicaMotosComponent } from './seguridad-mecanica-motos.component';

describe('SeguridadMecanicaMotosComponent', () => {
  let component: SeguridadMecanicaMotosComponent;
  let fixture: ComponentFixture<SeguridadMecanicaMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadMecanicaMotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadMecanicaMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
