import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ApiabmProvider } from '../../providers/apiabm/apiabm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiabmProvider]
})
export class HomePage {
  esUsuario=true;
  usuario: string;
  pass: string;
  constructor(public navCtrl: NavController) {

  }
  login() {
    if (this.usuario == "admin" && this.pass == "123" || this.usuario == "alumno" && this.pass == "11"|| this.usuario == "profe" && this.pass == "22" ||this.usuario == "administrativo") {
      this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass });
    }
  }

  asignarUsuario(tipo) {
    switch (tipo) {
      case "admin": {
        this.usuario = "admin";
        this.pass = "123";
        break;
      }
      case "alumno": {
        this.usuario = "alumno";
        this.pass = "11";
        break;
      }
      case "profesor": {
        this.usuario = "profe";
        this.pass = "22";
        break;
      }
      case "administrativo": {
        this.usuario = "administrativo";
        this.pass = "44";
        break;
      }
    }

  }
}
