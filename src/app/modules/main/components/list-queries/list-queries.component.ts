import { Component } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-list-queries',
  templateUrl: './list-queries.component.html',
  styleUrls: ['./list-queries.component.scss']
})
export class ListQueriesComponent {

  viewQuestion: any = '';
  questions: any;

  constructor(private queryService: QueryService) {

    this.viewQuestion = localStorage.getItem('viewQuestion');

    this.getAllQueries();

  }

  getAllQueries() {
    this.queryService.getAllQueries()
      .subscribe({
        next: (response: any) => {
          this.questions = response.data
        },
        error: (error) => {
          alert('Please ensure you have a stable internet connection 📶');
          console.log(error);
        }
      })
  }

  viewQuestionFnc(question: any) {
    this.viewQuestion = true;
    localStorage.setItem('viewQuestion', 'true');
    localStorage.setItem('currentQuestion', JSON.stringify(question));
  }

}
