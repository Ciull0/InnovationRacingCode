import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: Router
  ) {}


  
  ngOnInit(): void {
    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      console.log(this.route.url)
      switch (this.route.url.slice(1)){
        case "stradale":
          var tmp:any = this.util.mandaInfo("stradale",this.lingua);
          tmp.then(dati=>{
          this.elemSelezionati = dati;
          })
          break;
        case "fuoristrada":
          var tmp:any = this.util.mandaInfo("fuoristrada",this.lingua);
          tmp.then(dati=>{
            this.elemSelezionati = dati;
          })
          break;
        default:
          var tmp:any = this.util.mandaInfo("home",this.lingua);
          tmp.then(dati=>{
            this.elemSelezionati = dati;
          })
          break;
      }
      
    })
    this.stradale=false;
    this.fuoristrada=true;
  }

}
