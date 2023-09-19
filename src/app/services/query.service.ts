import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }


  submitQuery(titleInput: string, bodyInput: string, tagsInput: string) {
    return this.http.post(`http://localhost:4000/-submit-query`, { titleInput, bodyInput, tagsInput });
  }

  getAllQueries() {
    return this.http.get(`http://localhost:4000/get-all-queries`);
  }

}
