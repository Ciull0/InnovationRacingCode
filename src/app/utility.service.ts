import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  lang="ita";
  ambito:any="Default";
  ambitoChange: Subject<string> = new Subject<string>();
  
  constructor(
    private http: HttpClient
  ) {
    this.ambitoChange.subscribe((value) =>{
      this.ambito = value;
    })
   }

   cambiaAmbito(nuovoAmbito:string){
     this.ambito = nuovoAmbito;
   }

   ottieniAmbito(){
     return(this.ambito);
   }

  cambiaLingua(lingua:string){
    this.lang=lingua;
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
