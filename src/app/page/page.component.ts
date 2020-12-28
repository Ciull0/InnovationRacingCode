import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  infoPagina = [];

  constructor(
    private route:ActivatedRoute,
    private utilita:UtilityService
  ) { }

  ngOnInit(): void {
    console.log("nuovo");
    this.route.params.subscribe(url => {
      let tmp:any = this.utilita.mandaInfo(url.pagina);
      tmp.then(dati=>{
        this.infoPagina[0] = dati[0];
        for(let elem of dati){
          if(elem.id == url.posizione){this.infoPagina[1]=elem}
        }
        for(let elem2 of dati){
          if(elem2 != this.infoPagina[0] && elem2.id != url.posizione){
            this.infoPagina.push(elem2);
          }
        }
      })
    });
  }


  cambiaCategoria(categoria: string){
    console.log(categoria);
  }

}
