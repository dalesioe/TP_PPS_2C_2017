import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ApiabmProvider } from '../../providers/apiabm/apiabm';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiabmProvider]
})
export class HomePage {
  esUsuario = true;
  usuarios: any;
  mail: string;
  password: string;

  constructor(public navCtrl: NavController, public http: Http) {
    /////////////TRAER USUARIOS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosUsuarios")
      .subscribe(data => {
        this.usuarios = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });

  }
  login() {
    this.usuarios.forEach(element => {
      if (element.mail == this.mail && element.password == this.password) {
        console.log("registro ok" + element);
        this.navCtrl.setRoot(MainPage, {
          "id": element.id,
          "nombre": element.nombre,
          "apellido": element.apellido,
          "mail": element.mail,
          "password": element.password,
          "legajo": element.legajo,
          "tipo": element.tipo
        });
      }
    });
  }

  asignarUsuario(tipo) {
    switch (tipo) {
      case "admin": {
        this.mail = "jm@gmail.com";
        this.password = "28745365";
        break;
      }
      case "alumno": {
        this.mail = "asd@hotmail.com";
        this.password = "3641598611";
        break;
      }
      case "profesor": {
        this.mail = "octavio@gmail.com";
        this.password = "321321321";
        break;
      }
      case "administrativo": {
        this.mail = "guillermo_fink@hotmail.com";
        this.password = "321321321";
        break;
      }
    }

  }
}
