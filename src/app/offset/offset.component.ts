import { Component, OnInit } from '@angular/core';
import { OffsetService } from '../Services/offset.service';

@Component({
  selector: 'app-offset',
  templateUrl: './offset.component.html',
  styleUrls: ['./offset.component.css']
})
export class OffsetComponent implements OnInit {

  constructor(private servise:OffsetService) { }
  advantages:any[]=["- جودة الطباعة والوضوح العالى","- إمكانیة الطباعة أنواع الورق المختلف","تكلفة الوحدة تقلكلما زادت الكمیة"]
  offsetlist:any;
imgs:string[]=["/assets/offset1.PNG","/assets/offset2.PNG","/assets/offset3.PNG"]
  ngOnInit(): void {
    this.servise.getall().subscribe(e=>{this.offsetlist=e})
  }

}
