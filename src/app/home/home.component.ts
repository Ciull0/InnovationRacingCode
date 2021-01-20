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
  lingua;
  
  constructor(
    private util: UtilityService,
    private route: ActivatedRoute
  ) {}


  
  ngOnInit(): void {
    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.route.params.subscribe(url => {
        let tmp:any = this.util.mandaInfo("home",this.lingua);
        tmp.then(dati=>{
          this.elemSelezionati = dati;
        })
      });
    })
    this.stradale=false;
    this.fuoristrada=true;
  }

}
