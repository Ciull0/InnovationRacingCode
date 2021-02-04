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
          if(this.infoPagina.GalleryTop.length == 1){
            this.infoPagina.GalleryTop[0].url = this.infoPagina.GalleryTop[0].url.replace("watch?v=","embed/");
            this.infoPagina.GalleryTop[0].url ='<iframe width="560" height="315" src="' + this.infoPagina.GalleryTop[0].url.splice(0,-3) + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"'
          }
          if(this.infoPagina.GalleryBottom.length == 1){
            this.infoPagina.GalleryBottom[0].url = this.infoPagina.GalleryBottom[0].url.replace("watch?v=","embed/");
            this.infoPagina.GalleryBottom[0].url ='<iframe width="560" height="315" src="' + this.infoPagina.GalleryBottom[0].url.splice(0,-3) + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"'
          }
          console.log(this.infoPagina)
        })
      });
    })
  }
}
