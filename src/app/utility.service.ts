import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  lang:string = "ita";
  langChange: Subject<string> = new Subject<string>();
  ambito:any="Default";
  ambitoChange: Subject<string> = new Subject<string>();
  
  constructor(
    private http: HttpClient
  ) {
    this.ambitoChange.subscribe((value) =>{
      this.ambito = value;
    })
    this.langChange.subscribe((valore) =>{
      this.lang = valore;
    })
   }

   cambiaAmbito(nuovoAmbito:string){
     this.ambito = nuovoAmbito;
   }

   ottieniAmbito(){
     return(this.ambito);
   }

  cambiaLingua(lingua:string){
    this.langChange.next(lingua);
    console.log(this.lang);
  }

  mandaInfo(pagina:string){
    let address = "assets/"+this.lang+"/"+pagina+".json";
    return new Promise( (resolve, reject) =>{
      this.http.get(address).subscribe(
        (success:any)=>{
          resolve(success);
        }, (error:any)=>{
          reject(error);
        }
      )
    })
  }
}
