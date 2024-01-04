import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacunasComponent } from './add-vacunas.component';

describe('AddVacunasComponent', () => {
  let component: AddVacunasComponent;
  let fixture: ComponentFixture<AddVacunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVacunasComponent]
    });
    fixture = TestBed.createComponent(AddVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
