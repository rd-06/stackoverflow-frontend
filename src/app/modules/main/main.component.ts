import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  username: any;
  usernameInput: any;
  askQuestion: any;
  questionBtnValue: string = 'Ask Question';

  constructor(private userService: UserService) {
    this.username = localStorage.getItem('username');
  }

  // ngOnInit(): void {
  //   console.log('onit');
  //   localStorage.setItem('questionBtnValue', 'Ask Question')
  //   this.questionBtnValue = 'Ask Question';
  // }

  login(username: string) {
    if (username) {
      this.userService.login(username)
        .subscribe({
          next: (response) => {
            this.username = username;
            localStorage.setItem('username', username);
          },
          error: (error) => {
            alert('Please ensure you have a stable internet connection 📶');
            console.log(error);
          }
        })

    } else {
      alert('Please complete all required fields.')
    }
  }

  questionBtn() {
    if (localStorage.getItem('questionBtnValue') === 'Ask Question') {
      localStorage.setItem('questionBtnValue', 'All Questions');
      this.questionBtnValue = 'All Questions';
    } else {
      localStorage.setItem('questionBtnValue', 'Ask Question');
      this.questionBtnValue = 'Ask Question';
    }
  }

}
