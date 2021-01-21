import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css'],
})
export class BigComponent implements OnInit {

  @Input() images;
  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  constructor() { }
  ngOnInit(): void {
    this.carousel.next();
  }

}
