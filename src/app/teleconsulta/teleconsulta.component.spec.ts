import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconsultaComponent } from './teleconsulta.component';

describe('TeleconsultaComponent', () => {
  let component: TeleconsultaComponent;
  let fixture: ComponentFixture<TeleconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeleconsultaComponent]
    });
    fixture = TestBed.createComponent(TeleconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
