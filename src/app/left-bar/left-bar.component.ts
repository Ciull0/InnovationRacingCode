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
  contatti = false;
  inPista = false;
  links = [];
  lingua;

  @Output() categoriaMostrata = new EventEmitter<string>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private util: UtilityService
  ) { }

  ngOnInit(): void {this.util.getAmbito().subscribe( (val)=>{
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
    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.route.params.subscribe(url => {
        let tmp:any = this.util.mandaInfo("leftBar",this.lingua);
        tmp.then(dati=>{
          this.links = dati;
        })
      });
    })
    
    this.stradale=false;
    this.fuoristrada=false;
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

  linguaIta(){
    this.util.setLingua("ita");
  }
  linguaEng(){
    this.util.setLingua("eng");
  }

}
