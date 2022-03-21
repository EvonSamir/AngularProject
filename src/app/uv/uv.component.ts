import { Component, OnInit } from '@angular/core';
import { UvService } from '../Services/uv.service';

@Component({
  selector: 'app-uv',
  templateUrl: './uv.component.html',
  styleUrls: ['./uv.component.css']
})
export class UvComponent implements OnInit {

  constructor(private service:UvService) { }
  advantages:any[]=["جودة ودقة الطباعة","یمكن الطباعة على اى خامة مباشرة","مثالیة للإنتاج الكبیر","ثبات الألوان ضد المیاه والخدش"]
  uvlist:any;
  imgs:any[]=["/assets/uv.PNG","/assets/uv1.PNG"]

  ngOnInit(): void {
    this.service.getall().subscribe(e=>{this.uvlist=e})
  }

}
