import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as CONSTANTS from './../../constants/index';
@Component({
  selector: 'app-questionnairev2',
  templateUrl: './questionnairev2.component.html',
  styleUrls: ['./questionnairev2.component.scss']
})
export class Questionnairev2Component {
  questionnaireType:string = '';
  questionnaireStatus: number = 0;
  validCSV = ['.csv'];
  csvFile:[];
  csvUploaded: boolean = false;
  questionnaireOptions:Array<Object> = [
    {
      id: 'questionnaireCSV',
      label: 'Import questionnaire from CSV',
      value: 'csv',
      image: CONSTANTS.IMAGE_PATH +'import-csvv2.png',
      groupclass: 'border-right border-brand-1 border-sm-0 mb-4 mb-md-0'
    },
    {
      id: 'questionnaireManually',
      label: 'Create questionnaire manually',
      value: 'manually',
      image: CONSTANTS.IMAGE_PATH + 'manuallyQuestionnairev2.png'
    }
  ];
  
  questionnaireForm: FormGroup = new FormGroup({
    questionnaireType: new FormControl(true)
  })

  constructor() {
    this.questionnaireForm.controls['questionnaireType'].valueChanges.subscribe((state: any) => {
      this.questionnaireStatus = 1;
      this.questionnaireType = state;
    });
  }

  getCSV(csv){
    this.csvFile = csv;
    this.csvUploaded = true;
  }
  removeCsv(){
    this.csvFile = null;
    this.csvUploaded = false;
  }

  updateQuestionnaireState(state) {
    if(state==='next'){
      this.questionnaireStatus = this.questionnaireStatus + 1;
    }
    else {
      this.questionnaireStatus = this.questionnaireStatus - 1;
    }
  }

}
