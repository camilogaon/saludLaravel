import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspecializacionesComponent } from './add-especializaciones.component';

describe('AddEspecializacionesComponent', () => {
  let component: AddEspecializacionesComponent;
  let fixture: ComponentFixture<AddEspecializacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEspecializacionesComponent]
    });
    fixture = TestBed.createComponent(AddEspecializacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
