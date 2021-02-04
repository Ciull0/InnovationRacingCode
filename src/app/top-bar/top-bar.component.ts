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
    this.util.getAmbito().subscribe( (val)=>{
      switch(val){
        case "stradale":
          this.stradale=true;
          this.fuoristrada=false;
          break;
        case "fuoristrada":
          this.fuoristrada=true;
          this.stradale=false;
          break;
        default:
          this.fuoristrada=false;
          this.stradale=false;
          break;
      }
    })
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
  setFuoristrada(){
    if(this.fuoristrada == true){
      this.util.setAmbito("Default");
      this.fuoristrada = false;
      this.stradale=false;
      this.router.navigateByUrl("")
    }else{
      this.util.setAmbito("fuoristrada");
      this.fuoristrada=true;
      this.stradale=false;
      this.router.navigateByUrl("fuoristrada")
    }
  }
  setStradale(){
    if(this.stradale == true){
      this.util.setAmbito("Default");
      this.stradale = false;
      this.fuoristrada = false;
      this.router.navigateByUrl("")
    }else{
      this.util.setAmbito("stradale");
      this.stradale = true;
      this.fuoristrada = false;
      this.router.navigateByUrl("stradale")
    }
  }

  goHome(){
    this.util.setAmbito("Default");
    this.fuoristrada=false;
    this.stradale=false;
    this.router.navigateByUrl("")
  }

  goToLink(elem:any, link:any = ''){
    this.aboutBar()
    this.navBar()
    this.router.navigate(['/',elem.url,link.url])
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

  chiudiMenu(cosaFai:string){
    if(cosaFai == "chiudi"){
      this.aboutBar();
    }
  }
}
