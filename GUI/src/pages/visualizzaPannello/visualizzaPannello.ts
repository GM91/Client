import { Component } from "@angular/core";
import { NavController,NavParams } from "ionic-angular";

@Component({
  selector: 'pannello',
  templateUrl: 'visualizzaPannello.html',
  styleUrls:['/visualizzaPannello.scss']
})
export class visualizzaPannello{

  private dizs;
  private diz;
  private dizf;
  private arrayOfKeys;

  constructor(public navController:NavController,public navParams:NavParams){
    this.dizs = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
    this.diz = JSON.parse(this.dizs) //In questo modo lo convertiamo a dizionario;
    this.dizf = this.diz["pannello_di_controllo"] //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;


    this.arrayOfKeys = Object.keys(this.dizf) //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    console.log(this.dizf)
    /*
    //Provo a stampare le varie chiavi del dizionario interno;

    console.log(this.dizf["Appelli disponibili"])
    console.log(this.dizf["Iscrizioni appelli"])
    console.log(this.dizf["Piano carriera"])
    console.log(this.dizf["Tasse"])*/
  }


}

