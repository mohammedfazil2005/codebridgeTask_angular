import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // /articles/
  constructor(private http:HttpClient) { }

  getArticles(){
    return this.http.get("/articles")
  }


}
