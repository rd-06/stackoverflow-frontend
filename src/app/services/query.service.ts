import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }


  updateQuery(reqBody: any) {
    return this.http.post(`http://localhost:4000/update-query`, { ...reqBody });
  }

  getAllQueries() {
    return this.http.get(`http://localhost:4000/get-queries`);
  }

}
