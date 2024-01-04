import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExamenesComponent } from './pagina-examenes.component';

describe('PaginaExamenesComponent', () => {
  let component: PaginaExamenesComponent;
  let fixture: ComponentFixture<PaginaExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaExamenesComponent]
    });
    fixture = TestBed.createComponent(PaginaExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
