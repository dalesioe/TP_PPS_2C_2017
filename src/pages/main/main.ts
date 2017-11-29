import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbmPage } from '../abm/abm';
import { AdmPerfilPage } from '../adm-perfil/adm-perfil';
import { AsistenciaPage } from '../asistencia/asistencia';
import { CursadasPage } from '../cursadas/cursadas';
import { DescargasPage } from '../descargas/descargas';
import { EncuestaPage } from '../encuesta/encuesta';
import { GraficoEncuestaPage } from '../grafico-encuesta/grafico-encuesta';
import { QRsPage } from '../q-rs/q-rs';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: number;

  abm: boolean;
  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');

  }

  openPage(pagina: string, tipo?: number) {
    switch (pagina) {
      case "abm":
        this.navCtrl.setRoot(AbmPage, { "tipo": tipo })
        break;
      case "asistencia":
        this.navCtrl.setRoot(AsistenciaPage, {
          "id": this.id,
          "nombre": this.nombre,
          "apellido": this.apellido,
          "mail": this.mail,
          "password": this.password,
          "legajo": this.legajo,
          "tipo": this.tipo
        });
        break;
      case "cursadas":
        this.navCtrl.setRoot(CursadasPage)
        break;
      case "encuesta":
        this.navCtrl.setRoot(EncuestaPage)
        break;
      case "qrs":
        this.navCtrl.setRoot(QRsPage)
        break;
      case "descarga":
        this.navCtrl.setRoot(DescargasPage)
        break;
      case "perfil":
        this.navCtrl.setRoot(AdmPerfilPage, {
          "id": this.id,
          "nombre": this.nombre,
          "apellido": this.apellido,
          "mail": this.mail,
          "password": this.password,
          "legajo": this.legajo,
          "tipo": this.tipo
        })
        break;
    }

  }
  closeMenu() {
    this.menu.close();
  }
  Volver() {
    this.navCtrl.setRoot(HomePage)
  }

}
