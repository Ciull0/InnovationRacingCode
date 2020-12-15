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
  
  constructor(
    private utility: UtilityService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {

    /*this.utility.provaHttp().then( (post:any)=>{
      this.treElementi = post;
      console.log(this.treElementi);
    })*/  //Per Fare richieste al Server più in là)
    let tmp:any = this.utility.mandaInfo("home");
        tmp.then(dati=>{
        this.elemSelezionati = dati;
        console.log(this.elemSelezionati);
    })
    this.stradale=false;
    this.fuoristrada=true

    this.route.url.subscribe(url => {
      console.log(url[0].path);
      if(url[0].path == "stradale" || url[0].path == "fuoristrada"){
        let tmp:any = this.utility.mandaInfo(url[0].path);
        tmp.then(dati=>{
        this.elemSelezionati = dati;
        if(url[0].path == "stradale"){this.stradale=true}
        if(url[0].path == "fuoristrada"){this.fuoristrada=false}
      })
      }
      
    });
  }
  

  /*cambiaCategoria(categoria){
    console.log(categoria);
    if(categoria == "Cross"){
      this.elemSelezionati = this.utility.info;
    }
    if(categoria == "Corsa"){
      this.elemSelezionati = this.utility.stradale;
    }
    if(categoria == "Default"){
      this.elemSelezionati = this.utility.info;
    }
  }*/

}
