import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import {MainPage} from "../mainPage/mainPage";

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  private matricola:string;
  private password:string;
  private items;


  constructor(public navCtrl: NavController,public http: Http) {}


  postRequest(){

      let postParams = {
        matricola:this.matricola,
        password:this.password
      };

      this.http.post("http://127.0.0.1:5000/",postParams).subscribe(data=>{
        this.items = data.json();
        //console.log(this.items);
          if(this.items["login"]==0){
            alert("Credenziali errate");
          }
           else {
            alert("Accesso effettuato");
            /*Qui dentro ci va il codice per puntare alla nuova pagina*/
            this.navCtrl.setRoot(MainPage,{mat:this.matricola,pass:this.password}); //In questo modo puntiamo ad una nuova pagina.
          }
        },error2 => {
        console.log(error2)
      });


  }


}
