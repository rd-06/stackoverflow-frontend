import { Component } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-edit-ans-queries',
  templateUrl: './edit-ans-queries.component.html',
  styleUrls: ['./edit-ans-queries.component.scss']
})
export class EditAnsQueriesComponent {

  editedQuestion: string = '';
  answer: string = '';
  currentQuestion: any = JSON.parse(localStorage.getItem('currentQuestion') || '');


  constructor(private queryService: QueryService) {
  }

  getAllQuestions() {
    localStorage.removeItem('viewQuestion');
    location.reload();
  }

  acceptAnswer(answer: any) {

    console.log(this.currentQuestion.answerMeta[answer].isAccepted);

    const reqBody = {
      _question: this.currentQuestion._question,
      answerMeta: [...this.currentQuestion.answerMeta, this.currentQuestion.answerMeta[answer].isAccepted = true]
    }
    this.queryService.updateQuery(reqBody)
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('currentQuestion', JSON.stringify(response));
          this.getAllQuestions();
        },
        error: (error) => { }
      })

  }

  editQuesion() {
    console.log(this.editedQuestion);
    if (this.editedQuestion) {
      console.log('yyyyyyyy');
      const reqBody = {
        _question: this.currentQuestion._question,
        questionMeta: {
          title: this.editedQuestion,
          body: this.currentQuestion.questionMeta.body,
          tags: [...this.currentQuestion.questionMeta.tags]
        }
      }
      this.queryService.updateQuery(reqBody)
        .subscribe({
          next: (response: any) => {
            localStorage.setItem('currentQuestion', JSON.stringify(response));
            this.getAllQuestions();
          },
          error: (error) => { }
        })
    } else {
      alert('enter somthing')
    }
  }

  postQuestion() {

    if (this.answer) {

      const reqBody = {
        _question: this.currentQuestion._question,
        answerMeta: [
          ...this.currentQuestion.answerMeta,
          {
            data: this.answer
          }
        ]
      }
      this.queryService.updateQuery(reqBody)
        .subscribe({
          next: (response: any) => {
            localStorage.setItem('currentQuestion', JSON.stringify(response));
            this.getAllQuestions();
          },
          error: (error) => { }
        })

    } else {
      alert('enter somthing')
    }

  }

}
