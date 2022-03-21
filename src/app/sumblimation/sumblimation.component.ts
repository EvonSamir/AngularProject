import { Component, OnInit } from '@angular/core';
import { SumblimationService } from '../Services/sumblimation.service';

@Component({
  selector: 'app-sumblimation',
  templateUrl: './sumblimation.component.html',
  styleUrls: ['./sumblimation.component.css']
})
export class SumblimationComponent implements OnInit {

  constructor(private service:SumblimationService) { }
  sumblimationlist:any;
  imgs:any[]=["/assets/sumblimation.PNG","/assets/sumblimation1.PNG","/assets/sumblimation2.PNG","/assets/sumblimation3.PNG"]
  advantages:any[]=["طباعة معظم الخامات  بشرط أن تكون معالجة","سرعة","تكلفة قلیلة","ثبات الألوان"]
  ngOnInit(): void {
    this.service.getall().subscribe(e=>{this.sumblimationlist=e})
  }
}
