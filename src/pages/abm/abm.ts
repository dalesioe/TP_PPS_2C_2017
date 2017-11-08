import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainPage} from '../main/main';

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

  usuario:string;
  pass:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
  }

  Volver()
  {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass })
  }

}
