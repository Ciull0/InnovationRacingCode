import { Component, Input, OnChanges, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, OnChanges {

  @Input() text
  lingua: string
  testoDaInserire

  constructor(
    private util: UtilityService,
    private salitazer: DomSanitizer) { }

  ngOnInit(): void {
    this.testoDaInserire =this.makeNewLine(this.putLink(this.makeBold(this.makeRed(this.makeUnderline(this.makeItalics(this.text.body))))));
    /*this.util.getLingua().subscribe( (ling)=>{
      let testoProva= "testo di prova con *grassetto*, _sottolineato_, $corsivo$, (red)rosso(red) e un (link)link esterno[https://www.youtube.com/?gl=IT&hl=it](link)" 
      this.lingua = ling;
      this.testoDaInserire = this.putLink(this.makeBold(this.makeRed(this.makeUnderline(this.makeItalics(this.text.body)))));
      console.log(this.putLink(testoProva))
      console.log(this.makeBold(testoProva))
      console.log(this.makeItalics(testoProva))
      console.log(this.makeRed(testoProva))
      console.log(this.makeUnderline(testoProva))
    })*/
  }

  ngOnChanges():void{
    this.testoDaInserire = this.makeNewLine(this.putLink(this.makeBold(this.makeRed(this.makeUnderline(this.makeItalics(this.text.body))))));
  }

  makeBold(testo:string){
    let inizio = testo.indexOf("*")
    let fine = testo.indexOf("*",inizio+1)
    while(inizio >= 0 && fine > inizio && fine < testo.length){
      testo = testo.replace(testo.slice(inizio,fine+1),"<b>"+testo.slice(inizio+1,fine)+"</b>");
      inizio=testo.indexOf("*",fine+1);
      fine=testo.indexOf("*",inizio+1);
    }
    return(testo)
  }

  makeItalics(testo:string){
    let inizio = testo.indexOf("$")
    let fine = testo.indexOf("$",inizio+1)
    while(inizio >= 0 && fine > inizio && fine < testo.length){
      console.log(testo.slice(inizio,fine+1))
      testo = testo.replace(testo.slice(inizio,fine+1),"<i>"+testo.slice(inizio+1,fine)+"</i>");
      inizio=testo.indexOf("$",fine+1);
      fine=testo.indexOf("$",inizio+1);
    }
    return(testo)
  }

  makeNewLine(testo:string){
    while(testo.indexOf('£') > 0){
      testo = testo.replace('£','<br>')
    }
    return(testo)
  }

  makeUnderline(testo:string){
    let inizio = testo.indexOf("_")
    let fine = testo.indexOf("_",inizio+1)
    while(inizio >= 0 && fine > inizio && fine < testo.length){
      testo = testo.replace(testo.slice(inizio,fine+1),"<u>"+testo.slice(inizio+1,fine)+"</u>");
      inizio=testo.indexOf("_",fine+1);
      fine=testo.indexOf("_",inizio+1);
    }
    return(testo)
  }

  makeRed(testo:string){
    let inizio = testo.indexOf("(red)")
    let fine = testo.indexOf("(red)",inizio+1)
    fine +=4
    while(inizio >= 0 && fine > inizio && fine < testo.length){
      testo = testo.replace(testo.slice(inizio,fine+1),"<mark>"+testo.slice(inizio+5,fine-4)+"</mark>");
      inizio=testo.indexOf("(red)",fine+1);
      fine=testo.indexOf("(red)",inizio+1);
      fine += 4
    }
    return(testo)
  }


  putLink(testo:string){
    let inizioFrase = testo.indexOf("(link)")
    let fineFrase = testo.indexOf("(link)",inizioFrase+1)
    fineFrase +=5
    let inizioLink = testo.indexOf("[",inizioFrase)
    let fineLink = testo.indexOf("]",inizioLink)
    let link = testo.slice(inizioLink+1,fineLink)
    while(inizioFrase >= 0 && fineFrase > inizioFrase && fineFrase < testo.length && inizioLink > inizioFrase && fineLink < fineFrase){
      if(link.indexOf("https")!= -1){
        testo = testo.replace(testo.slice(inizioFrase,fineFrase+1),'<a href="'+link+'" target="_blank">'+testo.slice(inizioFrase+6,inizioLink)+"</a>");
        inizioFrase=testo.indexOf("(link)",fineFrase+1);
        fineFrase=testo.indexOf("(link)",inizioFrase+1);
        fineFrase +=5
        inizioLink = testo.indexOf("[",inizioFrase)
        fineLink = testo.indexOf("]",inizioLink)
        link = testo.slice(inizioLink+1,fineLink)
      }else{
        testo = testo.replace(testo.slice(inizioFrase,fineFrase+1),'<a routerlink="/'+link+'">'+testo.slice(inizioFrase+6,inizioLink)+"</a>");
        inizioFrase=testo.indexOf("(link)",fineFrase+1);
        fineFrase=testo.indexOf("(link)",inizioFrase+1);
        fineFrase +=5
        inizioLink = testo.indexOf("[",inizioFrase)
        fineLink = testo.indexOf("]",inizioLink)
        link = testo.slice(inizioLink+1,fineLink)
      }
    }
    return(testo)
  }
}
