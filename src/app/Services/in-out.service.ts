import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InOutService {

  constructor(private http:HttpClient) { }
  url:any="/assets/Data/inout.json"
  getall():Observable<[]>{
   return this.http.get<[]>(this.url)
  }
}
