import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaceuticosComponent } from './farmaceuticos.component';

describe('FarmaceuticosComponent', () => {
  let component: FarmaceuticosComponent;
  let fixture: ComponentFixture<FarmaceuticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaceuticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmaceuticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
