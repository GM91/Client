import { Component } from '@angular/core';
import { LoginPage} from "../login/login";




@Component({
  templateUrl:"welcome.html"
})

export class Welcome{

  button1 = LoginPage;

  constructor(){}
}
