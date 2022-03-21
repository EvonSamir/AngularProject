import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CladdingService {

  constructor(private http:HttpClient) { }
  url="/assets/Data/Cladding.json"
  getall():Observable<[]>{
    return this.http.get<[]>(this.url)
  }
}
