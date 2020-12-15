import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-three-elements',
  templateUrl: './three-elements.component.html',
  styleUrls: ['./three-elements.component.css']
})
export class ThreeElementsComponent implements OnInit {

  @Input() treElementi;

  constructor(
    private utility: UtilityService
  ) { }

  ngOnInit(): void {
    /*this.utility.provaHttp().then( (post:any)=>{
      this.treElementi = post;
      console.log(this.treElementi);
    })*/
  }

}
