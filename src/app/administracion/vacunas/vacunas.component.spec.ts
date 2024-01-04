import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasComponent } from './vacunas.component';

describe('VacunasComponent', () => {
  let component: VacunasComponent;
  let fixture: ComponentFixture<VacunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasComponent]
    });
    fixture = TestBed.createComponent(VacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
