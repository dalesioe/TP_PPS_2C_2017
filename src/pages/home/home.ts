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
  usuario: string;
  pass: string;
  constructor(public navCtrl: NavController) {

  }
  login() {
    if (this.usuario == "admin" && this.pass == "123" || this.usuario == "alumno" && this.pass == "11") {
      this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass });
    }
  }

  asignarUsuario(tipo) {
    switch (tipo) {
      case "admin": {
        this.usuario = "admin";
        this.pass = "11";
        break;
      }
      case "invitado": {
        this.usuario = "invitado";
        this.pass = "22";
        break;
      }
      case "usuario": {
        this.usuario = "usuario";
        this.pass = "33";
        break;
      }
      case "j1": {
        this.usuario = "j1";
        this.pass = "44";
        break;
      }
      case "j2": {
        this.usuario = "j2";
        this.pass = "55";
        break;
      }
    }

  }
}
