import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-two-elements',
  templateUrl: './two-elements.component.html',
  styleUrls: ['./two-elements.component.css']
})
export class TwoElementsComponent implements OnInit {

  @Input() twoElement;

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
  }

}
