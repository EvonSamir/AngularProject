import { Component, OnInit } from '@angular/core';
import { LazerService } from '../Services/lazer.service';

@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.css']
})
export class LazerComponent implements OnInit {

  constructor(private service:LazerService) { }
  lazerlist:any;
  advantages:string[]=["عمل الدروع والمدالیات","اللوحات الارشادیة","تستخدم فى عمل الماكیتات الھندسیة","تستخدم فى القص والحفر والرسم على الجلود الطبیعیة والصناعیة","قص البدجات","ألاعمال الیدویة و خان الخلیلى "]
  imgs:any[]=["/assets/lazer.PNG","/assets/lazer1.PNG","/assets/lazer2.PNG"]
    ngOnInit(): void {
  this.service.getall().subscribe(e=>{this.lazerlist=e})
    }
}
