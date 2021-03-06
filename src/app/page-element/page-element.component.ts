import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-element',
  templateUrl: './page-element.component.html',
  styleUrls: ['./page-element.component.css']
})
export class PageElementComponent implements OnInit {

  @Input() infoBlock;
  constructor() { }

  slide = true;
  

  ngOnInit(): void {
    this.infoBlock.then((nuovoInfo)=>{
      this.infoBlock = nuovoInfo
    })
  }

  

}
