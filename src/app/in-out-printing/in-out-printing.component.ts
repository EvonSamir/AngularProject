import { Component, OnInit } from '@angular/core';
import { InOutService } from '../Services/in-out.service';

@Component({
  selector: 'app-in-out-printing',
  templateUrl: './in-out-printing.component.html',
  styleUrls: ['./in-out-printing.component.css']
})
export class InOutPrintingComponent implements OnInit {

  inoutlist:any;
  constructor(private service:InOutService) { }
  // imgs:string[]=["/assets/outindoor.PNG","/assets/outindoor1.PNG","/assets/outindoor2.PNG","/assets/outindoor3.PNG","/assets/outindoor4.PNG","/assets/outindoor5.PNG"]
  ngOnInit(): void {
    this.service.getall().subscribe(h=>{this.inoutlist=h})
  }

}
