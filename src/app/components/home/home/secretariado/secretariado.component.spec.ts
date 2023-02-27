import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariadoComponent } from './secretariado.component';

describe('SecretariadoComponent', () => {
  let component: SecretariadoComponent;
  let fixture: ComponentFixture<SecretariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretariadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
