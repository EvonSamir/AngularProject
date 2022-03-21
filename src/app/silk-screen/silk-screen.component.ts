import { Component, OnInit } from '@angular/core';
import { SilkScreenService } from '../Services/silk-screen.service';

@Component({
  selector: 'app-silk-screen',
  templateUrl: './silk-screen.component.html',
  styleUrls: ['./silk-screen.component.css']
})
export class SilkScreenComponent implements OnInit {

  constructor(private service:SilkScreenService) { }
  silklist:any
  advantages:string[]=["إمكانیة طباعة على معظم الخامات","قتصادیة فى طباعة الكمیات القلیلة والمتوسطة","ثبات الطباعة بنسبة عالیة","تكلفة الوحدة تقل كلما زادت الكمیة"]
  // imgs:any[]=["/assets/silkscreen.PNG","/assets/silkscreen1.PNG","/assets/silkscreen2.PNG","/assets/silkscreen3.PNG"]
  ngOnInit(): void {
    this.service.getall().subscribe(e=>{this.silklist=e})
  }

}
