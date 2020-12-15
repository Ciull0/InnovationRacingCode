import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-two-plus-one',
  templateUrl: './two-plus-one.component.html',
  styleUrls: ['./two-plus-one.component.css']
})
export class TwoPlusOneComponent implements OnInit {

  @Input() treElementi;

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
  }

}
