import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffsetService {

  constructor(private http:HttpClient) { }
  url="/assets/Data/offset.json";
  getall():Observable<[]>{
    return this.http.get<[]>(this.url)

  }
}
