import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos"


  constructor(private http : HttpClient) { }

  getCategories() : Observable<Todos[]> {
     return this.http.get<Todos[]>(this.apiUrl)
    }
  }
