import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajatensionComponent } from './bajatension.component';

describe('BajatensionComponent', () => {
  let component: BajatensionComponent;
  let fixture: ComponentFixture<BajatensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajatensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajatensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
