import { Component, OnInit } from '@angular/core';
import { TutorialModalComponent } from './../../tutorial-modal/tutorial-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef;
  validCSV = ['.csv'];
  selectedOption;
  csvFile:[];
  csvUploaded: boolean = false;
  questionnaireOptions:Array<Object> = [
    {
      id: 'questionnaireCSV',
      label: 'Import questionnaire from CSV',
      value: 'csv'
    },
    {
      id: 'questionnaireManually',
      label: 'Create questionnaire manually',
      value: 'manually'
    }
  ];

  stepperOptions = [
    {
      name: 'Download Preset File', 
      label: '', 
      stepFormGroup: ''
    },
    {
      name: 'Upload CSV File', 
      label: '', 
      stepFormGroup: ''
    }
  ];
  constructor(
    private modalService: MDBModalService
  ) { }

  ngOnInit(): void {
  }

  setQuestionnaireType (option){
    this.selectedOption = option.value;
  }

  getCSV(csv){
    this.csvFile = csv;
    this.csvUploaded = true;
  }
  removeCsv(){
    this.csvFile = null;
    this.csvUploaded = false;
  }

  openModal() {
    this.modalRef = this.modalService.show(TutorialModalComponent, {
      class: 'modal-dialog-centered modal-lg',
    });
  }

}
