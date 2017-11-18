import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CursadasPage } from '../cursadas/cursadas';
import { Http } from '@angular/http';
/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {

  usuario: string;
  pass: string;

  Materia: number;
  Profesor: number;
  Aula: number;
  Dia: number;

  materias: any;
  profesores: any;
  alumnos: any;

  verAsistencia: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
    /////////////TRAER MATERIAS Y AULAS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/traerTodasLasMaterias")
      .subscribe(data => {
        this.materias = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
    /////////////TRAER PROFESORES///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosProfes")
      .subscribe(data => {
        this.profesores = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  traer() {
    this.verAsistencia = false;
    /////////////TRAER ALUMNOS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosAlumnos")
      .subscribe(data => {
        this.alumnos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  VolverEleccion() {
    this.Materia = null;
    this.Profesor = null;
    this.Aula = null;
    this.Dia = null;
    this.verAsistencia = true;
  }
  ConfirmarAsistencia() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmacion',
      message: '¿Desea confirmar la asistencia marcada?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.VolverEleccion();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();


  }


  Volver() {
    this.navCtrl.setRoot(CursadasPage, { "usuario": this.usuario, "pass": this.pass })
  }
}
