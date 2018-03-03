import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

    private isLoggedIn = false;
  constructor(private http:HttpClient) { }

  setUserLogIn() {
      this.isLoggedIn = true
  }

  getUserLogIn() {
      return this.isLoggedIn;
  }

  getUsers() {
      return (
          [
              { id: 1,name: 'rohit'},
              { id: 2,name: 'rohit' },
              { id: 3,name: 'rohit' },
              { id: 4,name: 'rohit' }
          ])
  }

}
