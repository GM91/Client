import { Component } from '@angular/core';

import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {visualizzaPannello} from "../visualizzaPannello/visualizzaPannello";
import {pianoDiStudi} from "../pianoDiStudi/pianoDiStudi";
import {riepilogo} from "../riepilogoEsami/riepilogo";
import {pagamenti} from "../pagamenti/pagamenti";
import {libretto} from "../libretto/libretto";

@Component({
  selector:'mainPage',
  templateUrl: 'mainPage.html'
})
export class MainPage {
  private matricola:String;
  private password:String;
  private items;

  constructor(public navCtrl: NavController,public http: Http,public navParams:NavParams) {
    this.matricola = this.navParams.get("mat");
    this.password = this.navParams.get("pass");
    //console.log(this.matricola);
    //console.log(this.password);
  }


  piano_di_studi(){
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    this.http.post("http://127.0.0.1:5000/piano",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(pianoDiStudi,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }



  pannello(){

    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    this.http.post("http://127.0.0.1:5000/pannello",postParams).subscribe(data=>{
      this.items = data.json();
      //console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(visualizzaPannello,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });

  }

  riepilogo_esami(){
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    this.http.post("http://127.0.0.1:5000/riepilogo",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(riepilogo,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

  pagamenti(){
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    this.http.post("http://127.0.0.1:5000/pagamenti",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(pagamenti,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

  libretto(){
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    this.http.post("http://127.0.0.1:5000/libretto",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(libretto,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

}
