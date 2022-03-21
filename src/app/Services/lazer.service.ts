import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazerService {
url="/assets/Data/lazer.json"
  constructor(private http:HttpClient) { }
  getall():Observable<[]>{
    return this.http.get<[]>(this.url)
  }
}
