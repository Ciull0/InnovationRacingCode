import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    console.log(url.includes('http'))
    if(url.includes('http')){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + url + "?enablejsapi=1");
  }
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})



export class PageComponent implements OnInit {
  infoPagina;
  lingua;
  videoUrl;

  constructor(
    private route:ActivatedRoute,
    private utilita:UtilityService,
    public san: DomSanitizer
  ) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(url => {
      if(url.lingua != undefined && url.lingua != this.utilita.getLingua()){
        this.utilita.setLingua(url.lingua);
      }
      this.utilita.getLingua().subscribe( (ling)=>{
        this.lingua = ling;
        let tmp:any = this.utilita.mandaInfo(url.pagina,this.lingua);
        tmp.then(dati=>{
          for(let elem of dati){
            if(elem.sezione == url.posizione){this.infoPagina=elem}
          }
          if(this.infoPagina.GalleryTop.length == 1){
            this.videoUrl=this.infoPagina.GalleryTop[0].url
          }
          if(this.infoPagina.GalleryBottom.length == 1){
            this.videoUrl=this.infoPagina.GalleryBottom[0].url
          }
        })
      });
    })
  }
}
