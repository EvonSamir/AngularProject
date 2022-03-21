import { Component, OnInit } from '@angular/core';
import { CladdingService } from '../Services/cladding.service';

@Component({
  selector: 'app-cladding',
  templateUrl: './cladding.component.html',
  styleUrls: ['./cladding.component.css']
})
export class CladdingComponent implements OnInit {

  constructor(private service:CladdingService) { }
  claddinglist:any;
  imgs:string[]=["/assets/cladding.PNG","/assets/cladding1.PNG","/assets/cladding2.PNG","/assets/cladding3.PNG","/assets/cladding4.PNG"]
  advantages:any[]=["مقاومة ممتازة للعوامل الجویة","مقاومة عالیة للتقشیر","مقاومة الصدمات","طبقة الطلاء بدون تغییر اللون"]
  ngOnInit(): void {
    this.service.getall().subscribe(e=>{this.claddinglist=e})
  }

}
