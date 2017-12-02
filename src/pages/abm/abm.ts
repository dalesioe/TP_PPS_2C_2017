import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';
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
  archivos: any;
  lista: any;
  Importacion: any;
  testRadioOpen: boolean;
  testRadioResult;
  csvData: any[] = [];
  headerRow: any[] = [];
  mail: string;
  nombre: string;
  apellido: string;
  dni: number;
  sexo: string;
  tipo: string;
  usuario: string;
  pass: string;
  archivo: string;
  Fecha: Date;
  existe: boolean;
  tipoUsuario: string;
  constructor(private alertCtrl: AlertController, public file: File, public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
    this.tipo = this.navParams.get('tipo');
    this.tipoUsuario = this.navParams.get('tipoUsuario');
  }
  mostrarAlert(exito) {
    if (exito == 1) {
      let alert = this.alertCtrl.create({
        title: 'Agregado',
        subTitle: 'Exito al agregar el usuario',
        buttons: ['Aceptar']
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Se produjo un error, vuelva a intentar',
        buttons: ['Cancelar']
      });
      alert.present();
    }
  }

  AltaConArchivo() {
   
  }
  Alta() {
    let body: any;
    body = { "nombre": this.nombre, "apellido": this.apellido, "mail": this.mail, "dni": this.dni, "sexo": this.sexo };
    switch (this.tipo) {
      case "1":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAdmin", body)
          .subscribe(data => {
            this.mostrarAlert(1);
            this.Volver();
          }, error => {
            this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "2":
        this.http.post('http://www.estacionamiento.16mb.com/git/api/altaAdministrativo', body)
        .subscribe(data => {
          this.mostrarAlert(1);
          this.Volver();
        }, error => {
          this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "3":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaProfesor", body)
        .subscribe(data => {
          this.mostrarAlert(1);
          this.Volver();
        }, error => {
          this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "4":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAlumno", body)
        .subscribe(data => {
          this.mostrarAlert(1);
          this.Volver();
        }, error => {
          this.mostrarAlert(0);// Error getting the data
          });
        break;

      default:
        console.log("error");
    }
  }
  Volver() {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass, "tipo":this.tipoUsuario });
  }

}
