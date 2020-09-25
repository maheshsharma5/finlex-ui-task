import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionModalComponent } from './add-new-question-modal.component';

describe('AddNewQuestionModalComponent', () => {
  let component: AddNewQuestionModalComponent;
  let fixture: ComponentFixture<AddNewQuestionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewQuestionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
