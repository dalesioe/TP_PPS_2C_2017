import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CursadasPage} from '../cursadas/cursadas';

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

  usuario:string;
  pass:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
  }

  Volver()
  {
    this.navCtrl.setRoot(CursadasPage, { "usuario": this.usuario, "pass": this.pass })
  }

}
