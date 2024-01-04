import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVacunasComponent } from './pagina-vacunas.component';

describe('PaginaVacunasComponent', () => {
  let component: PaginaVacunasComponent;
  let fixture: ComponentFixture<PaginaVacunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaVacunasComponent]
    });
    fixture = TestBed.createComponent(PaginaVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
