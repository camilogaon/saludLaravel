import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicamentosComponent } from './edit-medicamentos.component';

describe('EditMedicamentosComponent', () => {
  let component: EditMedicamentosComponent;
  let fixture: ComponentFixture<EditMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMedicamentosComponent]
    });
    fixture = TestBed.createComponent(EditMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
