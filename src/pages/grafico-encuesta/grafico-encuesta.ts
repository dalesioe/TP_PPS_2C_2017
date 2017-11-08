import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EncuestaPage} from '../encuesta/encuesta';

/**
 * Generated class for the GraficoEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grafico-encuesta',
  templateUrl: 'grafico-encuesta.html',
})
export class GraficoEncuestaPage {

  usuario:string;
  pass:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
  }

  Volver()
  {
    this.navCtrl.setRoot(EncuestaPage, { "usuario": this.usuario, "pass": this.pass })
  }

}
