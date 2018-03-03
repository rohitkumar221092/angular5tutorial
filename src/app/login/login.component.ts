import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  submitLogin(event)
  {
      debugger;
      event.preventDefault();
      var email = event.currentTarget[0].value;
      var password = event.currentTarget[1].value;
      if (email == "admin" && password == "password") {
          var islogin = this.userService.getUserLogIn();
          this.userService.setUserLogIn();
          this.router.navigate(['dashboard']);
      }
  }

}
