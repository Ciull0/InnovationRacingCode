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
  links = [];
  lingua;

  @Output() categoriaMostrata = new EventEmitter<string>();
  constructor(
    private util: UtilityService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stradale=false;
    this.fuoristrada=false;
    if(this.router.url == "/fuoristrada"){this.fuoristrada=true}
    if(this.router.url == "/stradale"){this.stradale=true}
    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.route.params.subscribe(url => {
        let tmp:any = this.util.mandaInfo("topbar",this.lingua);
        tmp.then(dati=>{
          this.links = dati;
        })
      });
    })
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
    this.util.setLingua("ita");
  }
  linguaEng(){
    this.util.setLingua("eng");
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
