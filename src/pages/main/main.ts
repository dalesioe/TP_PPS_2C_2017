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
  usuario: string;
  pass: string;
  abm: boolean;
  constructor(public menu: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
  }

  openPage(pagina: string) {
    switch (pagina) {
      case "abm":
        this.navCtrl.setRoot(AbmPage, { "usuario": this.usuario, "pass": this.pass })
        break;
      case "cursadas":
        this.navCtrl.setRoot(CursadasPage, { "usuario": this.usuario, "pass": this.pass })
        break;
      case "encuesta":
        this.navCtrl.setRoot(EncuestaPage, { "usuario": this.usuario, "pass": this.pass })
        break;
      case "qrs":
        this.navCtrl.setRoot(QRsPage, { "usuario": this.usuario, "pass": this.pass })
        break;
      case "descarga":
        this.navCtrl.setRoot(DescargasPage, { "usuario": this.usuario, "pass": this.pass })
        break;
      case "perfil":
        this.navCtrl.setRoot(AdmPerfilPage, { "usuario": this.usuario, "pass": this.pass })
        break;
    }

  }
  closeMenu()
  {
    this.menu.close();
  }
  Volver()
  {
    this.navCtrl.setRoot(HomePage, { "usuario": this.usuario, "pass": this.pass })
  }

}
