import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    switch(pagina){
      case "stradale":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/homeStradale.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "fuoristrada":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/homeFuoristrada.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "corse":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/corse.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "noleggio":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/noleggio.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "corsi":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/corsi.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "servizi":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/servizi.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "escursioni":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/escursioni.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "pista":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/giornatepista.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "sponsor":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/sponsor.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "team":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/team.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "servizi":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/servizi.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "calendario":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/eventi.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "news":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/news.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "servizi":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/servizi.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "azienda":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/legale.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
      case "contatti":
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/contatti.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
        case "home":
          return new Promise( (resolve, reject) =>{
            this.http.get("assets/"+this.lang+"/homeDefault.json").subscribe(
              (success:any)=>{
                resolve(success);
              }, (error:any)=>{
                reject(error);
              }
            )
        })
      default:
        return new Promise( (resolve, reject) =>{
          this.http.get("assets/"+this.lang+"/homeStradale.json").subscribe(
            (success:any)=>{
              resolve(success);
            }, (error:any)=>{
              reject(error);
            }
          )
        })
    }
  }
}
