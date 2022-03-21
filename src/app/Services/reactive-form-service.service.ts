import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imedia } from '../Imedia';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormServiceService {

  constructor(private http : HttpClient) { }

  url: string= "/assets/Data/media.json"
  _url = "http://localhost:3000/enroll";
  
  GetAllInformation():Observable<Imedia[]>{
    return this.http.get<Imedia[]>(this.url)
    };

  enroll(User : Users){
    return this.http.post(this._url,User)
  }
  
}
