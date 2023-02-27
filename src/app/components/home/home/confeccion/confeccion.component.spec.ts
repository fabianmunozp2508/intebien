import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeccionComponent } from './confeccion.component';

describe('ConfeccionComponent', () => {
  let component: ConfeccionComponent;
  let fixture: ComponentFixture<ConfeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
