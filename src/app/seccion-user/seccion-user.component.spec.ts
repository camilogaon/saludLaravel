import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionUserComponent } from './seccion-user.component';

describe('SeccionUserComponent', () => {
  let component: SeccionUserComponent;
  let fixture: ComponentFixture<SeccionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionUserComponent]
    });
    fixture = TestBed.createComponent(SeccionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
