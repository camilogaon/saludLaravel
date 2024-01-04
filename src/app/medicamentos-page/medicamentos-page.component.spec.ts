import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosPageComponent } from './medicamentos-page.component';

describe('MedicamentosPageComponent', () => {
  let component: MedicamentosPageComponent;
  let fixture: ComponentFixture<MedicamentosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosPageComponent]
    });
    fixture = TestBed.createComponent(MedicamentosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
