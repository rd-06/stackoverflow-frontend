import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-ans-queries',
  templateUrl: './edit-ans-queries.component.html',
  styleUrls: ['./edit-ans-queries.component.scss']
})
export class EditAnsQueriesComponent {

  editedQuestion: string = '';
  answer: string = '';


  constructor() {

  }

  getAllQuestions() {
    localStorage.removeItem('viewQuestion');
    location.reload();
  }

  editQuesion() {

  }

  submitAnswer() {

  }

}
