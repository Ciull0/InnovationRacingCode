import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private util: UtilityService) { }
  articoli = []
  gallery = []
  ngOnInit(): void {
    let tmp:any = this.util.mandaInfo("articoli");
      tmp.then(dati=>{
        this.gallery = dati[0]
        dati.splice(0,1)
        this.articoli=dati
        /*for(let a of this.articoli){
          a.link = "blog/" + a.link
        }*/
        console.log(this.articoli)
    })
  }

}
