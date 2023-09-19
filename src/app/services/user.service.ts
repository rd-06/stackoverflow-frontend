import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string) {
    return this.http.post(`http://localhost:4000/user`, { username })
  }

}
