import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacioncompuComponent } from './reparacioncompu.component';

describe('ReparacioncompuComponent', () => {
  let component: ReparacioncompuComponent;
  let fixture: ComponentFixture<ReparacioncompuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparacioncompuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparacioncompuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
