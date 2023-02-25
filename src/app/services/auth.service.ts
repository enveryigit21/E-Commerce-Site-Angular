import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Todos } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient : HttpClient) { }

  login(loginModel : LoginModel) {
 return this.httpClient.post<Todos>(this.apiUrl , loginModel)
  }

  isAuthenticated() {
    if(localStorage.getItem("token")){
      return true ;
    }
    else {
        return false ;
    }
  }


}
