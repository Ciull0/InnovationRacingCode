import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() elem;

  constructor(
    private utility: UtilityService
  ) { }

  post = [];

  ngOnInit(): void {
  }

}
