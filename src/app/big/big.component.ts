import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
})
export class BigComponent implements OnInit {

  @Input() images;

  constructor() { }
  //images = [1,2,3,4].map((n) => `assets/carousel(${n}).jpg`);
  ngOnInit(): void {
  }

}
