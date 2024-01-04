import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacunasComponent } from './edit-vacunas.component';

describe('EditVacunasComponent', () => {
  let component: EditVacunasComponent;
  let fixture: ComponentFixture<EditVacunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVacunasComponent]
    });
    fixture = TestBed.createComponent(EditVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
