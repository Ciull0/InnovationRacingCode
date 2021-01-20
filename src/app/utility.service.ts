import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private lang: BehaviorSubject<string>
  ambito:any="Default";
  ambitoChange: Subject<string> = new Subject<string>();
  
  constructor(
    private http: HttpClient
  ) {
    this.ambitoChange.subscribe((value) =>{
      this.ambito = value;
    })
    this.lang = new BehaviorSubject<string>("ita");
   }

   getLingua(): Observable<string>{
     return this.lang.asObservable();
   }
   setLingua(nuovaLingua:string):void{
     this.lang.next(nuovaLingua);
     console.log(this.lang);
   }

   cambiaAmbito(nuovoAmbito:string){
     this.ambito = nuovoAmbito;
   }

   ottieniAmbito(){
     return(this.ambito);
   }
   ottieniLingua(){
     return this.lang;
   }

  mandaInfo(pagina:string, lingua:string = "ita"){
    let address = "assets/"+lingua+"/"+pagina+".json";
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
