import { Component } from '@angular/core';

import {NavController, NavParams} from "ionic-angular";


@Component({
  selector:'pianoPage',
  templateUrl: 'pianoDiStudi.html',
  styleUrls:['/pianoDiStudi.scss']
})
export class pianoDiStudi{

  private dizs;
  private diz;
  private dizf;
  private arrayOfKeys;


  constructor(public navController:NavController,public navParams:NavParams){
    this.dizs = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
    this.diz = JSON.parse(this.dizs) //In questo modo lo convertiamo a dizionario;
    this.dizf = this.diz["piano"] //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
    //console.log(this.dizf)

    this.arrayOfKeys = Object.keys(this.dizf) //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
  }
}
