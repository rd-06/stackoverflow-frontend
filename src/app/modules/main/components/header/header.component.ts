import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  username: any = '';

  constructor() {
    this.username = localStorage.getItem('username')
  }

  logout() {
    localStorage.clear();
    location.reload();
  }

}
