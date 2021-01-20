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
  tmpTop = [];
  tmpBottom = [];

  ngOnInit(): void {
    this.tmpTop = this.infoBlock.testoTop.body.split(".");
    this.tmpBottom = this.infoBlock.testoBottom.body.split(".");
  }

}
