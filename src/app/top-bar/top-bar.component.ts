import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isNavbarCollapsed = true;
  isAboutbarCollapsed = true;
  stradale=false;
  fuoristrada=false;

  @Output() categoriaMostrata = new EventEmitter<string>();
  constructor(
    private util: UtilityService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("di qua");
    this.stradale=false;
    this.fuoristrada=false;
    if(this.router.url == "/fuoristrada"){this.fuoristrada=true}
    if(this.router.url == "/stradale"){this.stradale=true};
  }

  aboutBar(){
    this.isAboutbarCollapsed = !this.isAboutbarCollapsed;
    if(this.isNavbarCollapsed == false){this.isNavbarCollapsed=true}
  }

  navBar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    if(this.isAboutbarCollapsed == false){this.isAboutbarCollapsed=true}
  }

  linguaIta(){
    this.util.cambiaLingua("ita");
  }
  linguaEng(){
    this.util.cambiaLingua("eng");
  }

  /*cambiaVendita(){
    if(this.cosaAppare == "Cross"){
      this.cosaAppare = "Corsa";
      this.categoriaMostrata.emit("Corsa");
    }else{
      this.cosaAppare = "Cross";
      this.categoriaMostrata.emit("Cross");
    }
  }*/
}
