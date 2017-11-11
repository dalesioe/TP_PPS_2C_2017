import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CursadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursadas',
  templateUrl: 'cursadas.html',
})
export class CursadasPage {

  usuario: string;
  pass: string;
  encabezado: any;
  listado: any;
  id: number = 1004;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public http2: Http) {

    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');

    //let urlSearchParams = new URLSearchParams();
    // urlSearchParams.set('id', id);
    // console.log(urlSearchParams);
    this.http.post('http://www.estacionamiento.16mb.com/git/api/traerUsuarioPorId', { id: 1004 })
      .map(res => res.json()).subscribe(data => {
        this.encabezado = data;
      });
    this.http2.get('http://www.estacionamiento.16mb.com/git/api/todoslosAlumnos')
      .map(res => res.json()).subscribe(data => {
        this.listado = data;

        console.log('encabezado: ' + this.encabezado);
        //console.log(this.listado);
      });
  }

  Volver() {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass })
  }
}
