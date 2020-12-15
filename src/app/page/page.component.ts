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
        this.infoPagina = dati;
      })
    });
  }


  cambiaCategoria(categoria: string){
    console.log(categoria);
  }

}
