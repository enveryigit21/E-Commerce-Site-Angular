import { Todos } from 'src/app/models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos"


  constructor(private http : HttpClient) { }

  getTodos() : Observable<Todos[]> {
     return this.http.get<Todos[]>(this.apiUrl)
    }


  add(product : Todos) : Observable<Todos[]> {
    return this.http.post<Todos[]>(this.apiUrl + "/products/add" , product)
  }
  }

