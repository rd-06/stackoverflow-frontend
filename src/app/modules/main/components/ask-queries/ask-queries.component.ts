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

      const reqBody = {
        questionMeta: {
          title: this.titleInput,
          body: this.bodyInput,
          tags: this.tagsInput.split(/[,\s;]+/)
        },
        "createdBy": localStorage.getItem('username')
      }

      this.queryService.updateQuery({ ...reqBody })
        .subscribe({
          next: (response) => {
            this.titleInput = '';
            this.bodyInput = '';
            this.tagsInput = '';

            alert('"Your question has been successfully submitted."')
          },
          error: (error) => {
            alert('Please ensure you have a stable internet connection 📶');
            console.log(error);
          }
        });
    } else {
      alert('Please complete all required fields.');
    }
  }

}
