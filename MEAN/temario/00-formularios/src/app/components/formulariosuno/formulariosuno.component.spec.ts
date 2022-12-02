import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosunoComponent } from './formulariosuno.component';

describe('FormulariosunoComponent', () => {
  let component: FormulariosunoComponent;
  let fixture: ComponentFixture<FormulariosunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
