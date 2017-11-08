import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainPage} from '../main/main';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
usuario:string;
pass:string;
  constructor(public navCtrl: NavController) {

  }
  login()
  {
    if(this.usuario=="admin" && this.pass=="123" || this.usuario=="alumno" && this.pass=="11")
    {
      this.navCtrl.setRoot(MainPage, {"usuario":this.usuario,"pass":this.pass});
    }
  }

}
