import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspecializacionesComponent } from './edit-especializaciones.component';

describe('EditEspecializacionesComponent', () => {
  let component: EditEspecializacionesComponent;
  let fixture: ComponentFixture<EditEspecializacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEspecializacionesComponent]
    });
    fixture = TestBed.createComponent(EditEspecializacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
