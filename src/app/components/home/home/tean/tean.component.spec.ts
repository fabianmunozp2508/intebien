import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeanComponent } from './tean.component';

describe('TeanComponent', () => {
  let component: TeanComponent;
  let fixture: ComponentFixture<TeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
