import { Component } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';


@Component({
  selector: 'app-ask-queries',
  templateUrl: './ask-queries.component.html',
  styleUrls: ['./ask-queries.component.scss']
})
export class AskQueriesComponent {

  titleInput: string = '';
  bodyInput: string = '';
  tagsInput: string = '';

  constructor(
    private queryService: QueryService
  ) {

  }

  submitQuery() {
    if (this.titleInput && this.bodyInput && this.tagsInput) {

      this.queryService.submitQuery(this.titleInput, this.bodyInput, this.tagsInput)
        .subscribe({
          next: (response) => {
            this.titleInput = '';
            this.bodyInput = '';
            this.tagsInput = '';

            alert('question submitted')
          },
          error: (error) => console.log(error)
        });
    } else {
      alert('enter all fields')
    }
  }

}
