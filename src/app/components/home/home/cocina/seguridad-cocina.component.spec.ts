import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadCocinaComponent } from './seguridad-cocina.component';

describe('SeguridadCocinaComponent', () => {
  let component: SeguridadCocinaComponent;
  let fixture: ComponentFixture<SeguridadCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadCocinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
