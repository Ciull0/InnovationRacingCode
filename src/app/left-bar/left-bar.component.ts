import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  stradale=false;
  fuoristrada=false;
  cosaAppare="Corsa";
  corse = false;
  team = false;
  crossodromo = false;
  contatti = false;
  inPista = false;
  links = [];

  @Output() categoriaMostrata = new EventEmitter<string>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private util: UtilityService
  ) { }

  ngOnInit(): void {
    this.stradale=false;
    this.fuoristrada=false;
    if(this.router.url == "/fuoristrada"){this.fuoristrada=true}
    if(this.router.url == "/stradale"){this.stradale=true};
    this.route.params.subscribe(url => {
      let tmp:any = this.util.mandaInfo("leftBar");
      tmp.then(dati=>{
        this.links = dati;
      })
    });
  }

  

  linguaIta(){
    this.util.cambiaLingua("ita");
  }
  linguaEng(){
    this.util.cambiaLingua("eng");
  }

}
