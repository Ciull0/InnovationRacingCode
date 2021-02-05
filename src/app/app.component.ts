import { Component, HostListener, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() ambito;
  navBar = true;
  lastScroll = 0;
  title = 'InnovationRacing2';

  @HostListener("window:scroll", []) onWindoScroll(){
    var st = window.pageXOffset || document.documentElement.scrollTop;
    if(st > this.lastScroll+30){
      this.navBar = false;
    }
    if( st < this.lastScroll-30){
      this.navBar = true;
    }
    this.lastScroll = st<=0? 0:st;
  }

  ambitoBridge(ambito:string){

  }

}
