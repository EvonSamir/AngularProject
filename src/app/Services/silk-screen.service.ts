import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SilkScreenService {

  constructor(private http:HttpClient) { }
  url:any="/assets/Data/silkscreen.json"
  getall():Observable<[]>{
   return this.http.get<[]>(this.url)
  }
}
