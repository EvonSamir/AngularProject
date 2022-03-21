import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormServiceService } from '../Services/reactive-form-service.service';
import { Users } from '../Users';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {

  constructor(private http : HttpClient, private fb :FormBuilder, private media : ReactiveFormServiceService) { }

  userModel = new Users("",0,"","")

  contactFrom = this.fb.group({
    Name:['',Validators.minLength(5)],
    Phone: [''] ,
    Email:[''],
    Message:['']
  })

  Media : any

  ngOnInit(): void {
    this.media.GetAllInformation().subscribe(mediaData=>{
      this.Media=mediaData;
      const body = { title: 'Angular PUT Request Example' };
      this.http.put<any>("http://localhost:3000/enroll",body).subscribe(e=>{e})

  })
  }

  get Name (){
    return this.contactFrom.get('Name')
  }
  
  onSubmit(){
    this.media.enroll(this.userModel).subscribe(response=>{
    console.log("Succeed")},
    error=>{
      console.log(error)})
    }

    Complete(){
    this.contactFrom.reset()
    }

}
