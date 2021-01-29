import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private lang: BehaviorSubject<string>
  private ambito: BehaviorSubject<string>
  
  constructor(
    private http: HttpClient
  ) {
    this.ambito = new BehaviorSubject<string>("Default");
    this.lang = new BehaviorSubject<string>("ita");
   }

   getLingua(): Observable<string>{
     return this.lang.asObservable();
   }
   setLingua(nuovaLingua:string):void{
     this.lang.next(nuovaLingua);
   }

   getAmbito(): Observable<string>{
     return this.ambito.asObservable();
   }
   setAmbito(nuovoAmbito:string){
     this.ambito.next(nuovoAmbito);
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
