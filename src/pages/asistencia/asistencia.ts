import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  ape_prof: string;
  Comision: string;
  Materia: string;
  Dia: string;
  lista: any;
  cursos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
    /////////////TRAER CURSOS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/traerCursosPorDia")
      .subscribe(data => {
        this.cursos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
    ///////////////////////////////////////

  }






  Volver() {
    this.navCtrl.setRoot(CursadasPage, { "usuario": this.usuario, "pass": this.pass })
  }
}
