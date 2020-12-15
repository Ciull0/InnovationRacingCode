import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  @Output() categoriaMostrata = new EventEmitter<string>();
  constructor(
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit(): void {
    this.stradale=false;
    this.fuoristrada=false;
    if(this.router.url == "/fuoristrada"){this.fuoristrada=true}
    if(this.router.url == "/stradale"){this.stradale=true};
  }

  

  linguaIta(){
    this.util.cambiaLingua("ita");
  }
  linguaEng(){
    this.util.cambiaLingua("eng");
  }

}
