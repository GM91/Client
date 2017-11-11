import { Component } from '@angular/core';
import { LoginPage} from "../login/login";





@Component({
  selector:'welcome',
  templateUrl:"welcome.html",
  styleUrls:['/welcome.scss']
})

export class Welcome{

  button1 = LoginPage;


  constructor() {}


}
