import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-wide',
  templateUrl: './wide.component.html',
  styleUrls: ['./wide.component.css']
})
export class WideComponent implements OnInit {

  @Input() element

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
  }

}
