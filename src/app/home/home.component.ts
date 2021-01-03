import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  crossElements = [];
  stradaElements = [];
  elemSelezionati = [];
  stradale = false;
  fuoristrada = true;
  ambito:string;
  lang:string;
  
  constructor(
    private utility: UtilityService,
    private route: ActivatedRoute
  ) {
    this.lang = utility.lang;
  }
  ngOnInit(): void {
    let tmp:any = this.utility.mandaInfo("home");
        tmp.then(dati=>{
        this.elemSelezionati = dati;
    })
    this.stradale=false;
    this.fuoristrada=true;
  }

}
