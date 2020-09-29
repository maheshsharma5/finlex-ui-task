import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '@finlex/ng-tools';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-add-new-question-modal',
  templateUrl: './add-new-question-modal.component.html',
  styleUrls: ['./add-new-question-modal.component.scss']
})
export class AddNewQuestionModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

  answerType:Array<Object> = [
    {
      label: 'Radio Button',
      value: 'Radio Button',
      disabled: false
    },
    {
      label: 'Checkbox',
      value: 'Checkbox',
      disabled: false
    },
    {
      label: 'Dropdown',
      value: 'Dropdown',
      disabled: false
    }
  ];
  stepType:Array<Object> = [
    {
      label: 'Step 1',
      value: 'Step 1',
      disabled: false
    },
    {
      label: 'Step 2',
      value: 'Step 2',
      disabled: false
    },
    {
      label: 'Step 3',
      value: 'Step 3',
      disabled: false
    }
  ];
  riskassessment:Array<Object> = [
    {
      label: 'Risk Assessment',
      value: 'Risk Assessment',
      disabled: false
    },
    {
      label: 'Risk Assessment',
      value: 'Risk Assessment',
      disabled: false
    },
    {
      label: 'Risk Assessment',
      value: 'Risk Assessment',
      disabled: false
    }
  ];
  configureanswer:Array<Object> = [
    {
      label: 'Configuration of answer A',
      value: 'Configuration of answer A',
      disabled: false
    },
    {
      label: 'Configuration of answer B',
      value: 'Configuration of answer B',
      disabled: false
    }
  ];

}
