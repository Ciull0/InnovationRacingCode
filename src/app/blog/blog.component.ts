import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private util: UtilityService, private route: Router) { }
  articoli
  gallery
  lingua
  ngOnInit(): void {
    this.util.getLingua().subscribe( (ling)=>{
      if(this.route.url.split('/')[2] && this.route.url.split('/')[2] != ling){
        this.util.setLingua(this.route.url.split('/')[2]);
      }
      this.lingua = ling;
      console.log(this.route.url.split('/'));
      this.util.mandaInfo(this.route.url.split('/')[1]).then( (data:[])=>{
        let tmp = []
        tmp = data
        this.gallery = tmp[0]
        this.articoli = tmp.slice(1)
      })
    })
  }

}
