import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistrarseComponent } from './pagina-registrarse.component';

describe('PaginaRegistrarseComponent', () => {
  let component: PaginaRegistrarseComponent;
  let fixture: ComponentFixture<PaginaRegistrarseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaRegistrarseComponent]
    });
    fixture = TestBed.createComponent(PaginaRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
