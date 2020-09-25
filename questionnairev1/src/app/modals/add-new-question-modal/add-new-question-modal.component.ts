import { Component, OnInit } from '@angular/core';
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

}
