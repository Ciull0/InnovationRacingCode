import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private utilita: UtilityService
  ) { }
  articolo
  heroBlock = {
    "title": "a",
    "subtitle":"b",
    "url":"c"
  }
  ngOnInit(): void {
    this.route.params.subscribe(url => {
      let tmp:any = this.utilita.mandaInfo("articoli");
      tmp.then(dati=>{
        for(let elem of dati){
          if(elem.link == url.articolo){this.articolo = elem}
        }
        for(let b of this.articolo.blocchi){
          b.tmp = b.body.split(".");
        }
        console.log(this.articolo);
        this.heroBlock.title=this.articolo.title;
        this.heroBlock.subtitle=this.articolo.subtitle;
        this.heroBlock.url=this.articolo.cover;
      })
    });
  }

}
