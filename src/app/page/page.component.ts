import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  infoPagina;
  lingua;

  constructor(
    private route:ActivatedRoute,
    private utilita:UtilityService
  ) {
    
   }

  ngOnInit(): void {
    this.utilita.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.route.params.subscribe(url => {
        let tmp:any = this.utilita.mandaInfo(url.pagina,this.lingua);
        tmp.then(dati=>{
          for(let elem of dati){
            if(elem.sezione == url.posizione){this.infoPagina=elem}
          }
        })
      });
    })
  }


  cambiaCategoria(categoria: string){
    console.log(categoria);
  }

}
