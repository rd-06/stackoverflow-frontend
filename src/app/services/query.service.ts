import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }


  updateQuery(reqBody: any) {
    return this.http.post(`${environment.BASE_URL}/update-query`, { ...reqBody });
  }

  getAllQueries() {
    return this.http.get(`${environment.BASE_URL}/get-queries`);
  }

}
