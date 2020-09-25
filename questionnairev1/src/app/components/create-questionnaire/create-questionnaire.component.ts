import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { AddNewQuestionModalComponent } from 'src/app/modals/add-new-question-modal/add-new-question-modal.component';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.scss']
})
export class CreateQuestionnaireComponent implements OnInit {
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  addNewQuestion(){
    this.modalRef = this.modalService.show(AddNewQuestionModalComponent, {
      class: 'modal-full-height modal-right modal-notify modal-info',
    });
  }
}
