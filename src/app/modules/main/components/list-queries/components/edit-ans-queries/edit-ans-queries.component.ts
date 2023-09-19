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
        error: (error) => {
          // alert('Please ensure you have a stable internet connection 📶');
          console.log(error);
        }
      })

  }

  editQuesion() {
    if (this.editedQuestion) {
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
      alert('Please complete all required fields.');
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
          error: (error) => {
            alert('Please ensure you have a stable internet connection 📶');
          }
        })

    } else {
      alert('Please complete all required fields.');
    }

  }

}
