import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UvService {

  constructor(private http:HttpClient) { }
  url="/assets/Data/uv.json"
  getall():Observable<[]>{
    return this.http.get<[]>(this.url)
  }
}
