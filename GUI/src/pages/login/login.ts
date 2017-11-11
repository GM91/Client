import {Component, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from "@angular/http";
import "rxjs/add/operator/map";
import {MainPage} from "../mainPage/mainPage";

import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig} from "../../app/app-config";
import {NativeStorage} from "@ionic-native/native-storage";


@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }],
  styleUrls:['/login.scss']
})
export class LoginPage {
  private matricola:string;
  private password:string;
  private url: string;
  private items;


  constructor(public navCtrl: NavController,public http: Http,@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig,private nativeStorage: NativeStorage) {
    this.url = this.config.serverUrl;

    this.nativeStorage.getItem("matricola").then(data=>{
      if(data!=null){
        this.matricola=data;
      }
    });

    this.nativeStorage.getItem("password").then(data=>{
      if(data!=null){
        this.password=data;
      }
    });

  }


  postRequest(){

    /*var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
     */

      this.nativeStorage.setItem("matricola",this.matricola);
      this.nativeStorage.setItem("password",this.password);

      let postParams = {
        matricola:this.matricola,
        password:this.password
      };

      this.http.post(this.url,postParams).subscribe(data=>{
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
