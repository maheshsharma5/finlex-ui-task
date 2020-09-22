import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnairev2Component } from './questionnairev2.component';

describe('Questionnairev2Component', () => {
  let component: Questionnairev2Component;
  let fixture: ComponentFixture<Questionnairev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questionnairev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnairev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
