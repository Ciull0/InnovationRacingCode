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

  ngOnInit(): void {
    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.route.params.subscribe(url => {
        let tmp:any = this.util.mandaInfo("leftBar",this.lingua);
        tmp.then(dati=>{
          console.log(dati);
          this.links = dati;
        })
      });
    })
    
    this.stradale=false;
    this.fuoristrada=false;
    if(this.router.url == "/fuoristrada"){this.fuoristrada=true}
    if(this.router.url == "/stradale"){this.stradale=true};
  }

  

  linguaIta(){
    this.util.setLingua("ita");
  }
  linguaEng(){
    this.util.setLingua("eng");
  }

}
