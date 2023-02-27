import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContableFinancieroComponent } from './contable-financiero.component';

describe('ContableFinancieroComponent', () => {
  let component: ContableFinancieroComponent;
  let fixture: ComponentFixture<ContableFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContableFinancieroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContableFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
