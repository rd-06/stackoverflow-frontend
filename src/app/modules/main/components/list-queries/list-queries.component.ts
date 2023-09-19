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

    console.log(this.viewQuestion);
    this.getAllQueries();

  }

  getAllQueries() {
    this.queryService.getAllQueries()
      .subscribe({
        next: (response: any) => {
          console.log(response.data);
          this.questions = response.data
        },
        error: (error) => console.log(error)
      })
  }

  viewQuestionFnc(question: any) {
    this.viewQuestion = true;
    localStorage.setItem('viewQuestion', 'true');
    localStorage.setItem('currentQuestion', JSON.stringify(question));
  }

}
