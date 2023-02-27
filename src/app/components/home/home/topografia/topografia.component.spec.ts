import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopografiaComponent } from './topografia.component';

describe('TopografiaComponent', () => {
  let component: TopografiaComponent;
  let fixture: ComponentFixture<TopografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopografiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
