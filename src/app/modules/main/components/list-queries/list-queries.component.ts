import { Component } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-list-queries',
  templateUrl: './list-queries.component.html',
  styleUrls: ['./list-queries.component.scss']
})
export class ListQueriesComponent {

  viewQuestion: any = '';

  constructor(private queryService: QueryService) {

    this.viewQuestion = localStorage.getItem('viewQuestion');

    console.log(this.viewQuestion);
    this.getAllQueries();

  }

  getAllQueries() {
    this.queryService.getAllQueries()
      .subscribe({
        next: (response) => { },
        error: (error) => console.log(error)
      })
  }

  viewQuestionFnc() {
    this.viewQuestion = true;
    localStorage.setItem('viewQuestion', 'true')

  }

}
