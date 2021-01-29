import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  constructor(
    private route: Router,
    private util: UtilityService
  ) { }
  articolo
  lingua
  heroBlock = {
    "title": "a",
    "subtitle":"b",
    "url":"c"
  }
  ngOnInit(): void {

    this.util.getLingua().subscribe( (ling)=>{
      this.lingua = ling;
      this.util.mandaInfo(this.route.url.split('/')[1]).then( (data:[])=>{
        let tmp = []
        tmp = data
        for(let articolo of tmp){
          if(articolo.url === this.route.url.split('/')[2]){
            this.articolo = articolo;
          }
        }
        this.heroBlock.title=this.articolo.title;
        this.heroBlock.subtitle=this.articolo.subtitle;
        this.heroBlock.url=this.articolo.cover;
      })
    })
  }

}
