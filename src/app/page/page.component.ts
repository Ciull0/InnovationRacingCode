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
  ) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(url => {
      let tmp:any = this.utilita.mandaInfo(url.pagina);
      tmp.then(dati=>{
        for(let elem of dati){
          if(elem.sezione == url.posizione){this.infoPagina[0]=elem}
        }
      })
    });
  }


  cambiaCategoria(categoria: string){
    console.log(categoria);
  }

}
