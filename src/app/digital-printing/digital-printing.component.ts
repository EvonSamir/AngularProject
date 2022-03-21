import { Component, OnInit } from '@angular/core';
import { DigitalPrintingService } from '../Services/digital-printing.service';

@Component({
  selector: 'app-digital-printing',
  templateUrl: './digital-printing.component.html',
  styleUrls: ['./digital-printing.component.css']
})
export class DigitalPrintingComponent implements OnInit {

  constructor(private service:DigitalPrintingService) { }
  digitallist:any;
  type:string[]=["مفكرة","بلوك نوت"," نتائج حائط","كتب","الورق النمطي للشركة","أظرف"]
  type2:string[]=["نتائج","مجلات"," كروت شخصیة","بروشور","فلایر"," قوائم طعام"]

  after:any[]=["طباعة","ریجة","قص","سلوفان","ھارد كفر","سلك لولبى","دبوس"]
  advantages:any[]=["ھادر قلیل","كمیات صغیرة ","سرعة","جوده"]
  // imgs:any[]=["/assets/digitalprinting.PNG","/assets/digitalprinting2.PNG","/assets/digitalprinting1.PNG"]
  ngOnInit(): void {
    this.service.getall().subscribe(e=>{this.digitallist=e})
  }

}
