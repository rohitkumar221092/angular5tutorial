import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public Users = [];
  constructor(private _userService:UserService) { }

  ngOnInit() {
      debugger;
      this.Users = this._userService.getUsers();
      console.log(this._userService.getUserLogIn());
  }

}
