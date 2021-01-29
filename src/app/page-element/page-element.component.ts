import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-element',
  templateUrl: './page-element.component.html',
  styleUrls: ['./page-element.component.css']
})
export class PageElementComponent implements OnInit {

  @Input() infoBlock;
  tmpTop=[];
  tmpBottom = [];
  tmp: any
  constructor() { }

  slide = true;
  

  ngOnInit(): void {
    /*for(let riga of this.infoBlock.testoTop.body.split('.')){
        let inizioGrassetto = riga.indexOf('#');
        let fineGrassetto = riga.indexOf('#',inizioGrassetto+1);
        if(inizioGrassetto != -1 && fineGrassetto != -1){
          let stringaGrassetto = riga.slice(inizioGrassetto+1,fineGrassetto);
          riga = riga.replace("#"+stringaGrassetto+"#","<b>"+stringaGrassetto+"</b>");
        }
        let body=document.getElementById("bodyTop");
        body.innerHTML += "<br><br>" + riga
    }
    for(let riga of this.infoBlock.testoBottom.body.split('.')){
        let inizioGrassetto = riga.indexOf('#');
        let fineGrassetto = riga.indexOf('#',inizioGrassetto+1);
        if(inizioGrassetto != -1 && fineGrassetto != -1){
          let stringaGrassetto = riga.slice(inizioGrassetto+1,fineGrassetto);
          riga = riga.replace("#"+stringaGrassetto+"#","<b>"+stringaGrassetto+"</b>");
        }
        let body=document.getElementById("bodyBottom");
        body.innerHTML += "<br><br>" + riga 
    }*/
  }

  

}
