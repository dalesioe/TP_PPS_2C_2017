import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AbmPage } from '../abm/abm';
import { AdmPerfilPage } from '../adm-perfil/adm-perfil';
import { AsistenciaPage } from '../asistencia/asistencia';
import { CursadasPage } from '../cursadas/cursadas';
import { DescargasPage } from '../descargas/descargas';
import { EncuestaPage } from '../encuesta/encuesta';
import { GraficoEncuestaPage } from '../grafico-encuesta/grafico-encuesta';
import { QRsPage } from '../q-rs/q-rs';
import { HomePage } from '../home/home';
import { MenuController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
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
  //mensajes push
  itemsRef: AngularFireList<any>;
  mensaje: Observable<any[]>;

  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams,
    public afDB: AngularFireDatabase, private toastCtrl: ToastController, public alertCtrl: AlertController) {

    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');

    this.itemsRef = afDB.list('/mensajes');
    //mensaje push
    if (this.tipo == 4) {

      this.mensaje = afDB.list('/mensajes').valueChanges();
      this.mensaje.forEach(element => {
        //convierto a cadena y asigno a variable mensaje
        let mensaje = element.toString();
        //toast
        let toast = this.toastCtrl.create({
          message: mensaje,
          duration: 3000,
          position: 'top'
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();
      })
    }

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
        this.navCtrl.setRoot(EncuestaPage, {
          "id": this.id,
          "nombre": this.nombre,
          "apellido": this.apellido,
          "mail": this.mail,
          "password": this.password,
          "legajo": this.legajo,
          "tipo": this.tipo
        })
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

  EnviarMensaje() {

    let prompt = this.alertCtrl.create({
      title: 'Mensaje',
      message: "Ingrese aqui su mensaje",
      inputs: [
        {
          name: 'title',
          placeholder: 'Mensaje'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log(data.title);
            this.itemsRef.update('0', { 0: data.title });
          }
        }
      ]
    });
    prompt.present();
  }
}
