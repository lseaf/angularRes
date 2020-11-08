import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private authService) { }

  ngOnInit(): void {
  }

  onClick(username, password) {
    console.log('username:' + username + '\r\n' + 'password:' + password);
    console.log('auth result is:' + this.authService.loginWithCredentials(username, password));
  }
}
