import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';
//import 'rxjs/add/operator/map';
/**
 * Generated class for the AbmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abm',
  templateUrl: 'abm.html',
})
export class AbmPage {

  mail: string;
  nombre: string;
  apellido: string;
  dni: number;
  sexo: string;
  tipo: string;
  usuario: string;
  pass: string;
  constructor(public file: File,public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');

  }
  AltaConArchivo()
  {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
  }
  Alta() {
    let body: any;
    body = { "nombre": this.nombre, "apellido": this.apellido, "mail": this.mail, "dni": this.dni, "sexo": this.sexo };
    switch (this.tipo) {
      case 'adm':
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAdmin", body)
          .subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);// Error getting the data
          });
        break;

      case 'administrativo':
        this.http.post('http://www.estacionamiento.16mb.com/git/api/altaAdministrativo', body)
          .subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);// Error getting the data
          });
        break;

      case 'profe':
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaProfesor", body)
          .subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);// Error getting the data
          });
        break;

      case 'alumno':
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAlumno", body)
          .subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);// Error getting the data
          });
        break;

      default:
        console.log("error");
    }
  }
  Volver() {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass })
  }

}
