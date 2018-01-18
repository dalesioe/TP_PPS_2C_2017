import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaesDirective } from '../../directives/idiomaes/idiomaes';
import { IdiomaenDirective } from '../../directives/idiomaen/idiomaen';
import { IdiomaptDirective } from '../../directives/idiomapt/idiomapt';
/**
 * Generated class for the QRsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q-rs',
  templateUrl: 'q-rs.html',
})
export class QRsPage {
  alumnos: any;
  datos: any;
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: string;
  api: string;
  datos_qr: string;
  resultado_qr: number;
  exite: number = 0;

  idioma: any;

  constructor(private alertCtrl: AlertController, public http: Http, private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController, public navParams: NavParams, public traductor: TranslateService,
    public es: IdiomaesDirective, public en: IdiomaenDirective, public pt: IdiomaptDirective) {

    ////////IDIOMA//////////////
    switch (this.traductor.currentLang) {
      case "es":
        this.idioma = es;
        break;

      case "en":
        this.idioma = en;
        break;

      case "pt":
        this.idioma = pt;
        break;
    }
    ///////////////////////////////

    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');
    switch (this.tipo) {
      case "4":
        this.api = "http://www.estacionamiento.16mb.com/git/api/alumnoQr";
        break;
      case "2":
        this.api = "http://www.estacionamiento.16mb.com/git/api/profesorQr";
        break;
    }
  }

  Volver() {
    this.navCtrl.setRoot(MainPage, {
      "id": this.id,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "mail": this.mail,
      "password": this.password,
      "legajo": this.legajo,
      "tipo": this.tipo
    })
  }
  QrAula() {
    this.datos = null;
    this.alumnos = null;
    this.barcodeScanner.scan().then(barcodeData => {
      this.datos_qr = barcodeData.text;
      this.ProcesarQrAula(this.datos_qr);
    });
  }
  ProcesarQrAula(aula) {
    let body: any;
    body = { "aula": aula, "id_Alumno": this.id };
    this.http.post(this.api, body)
      .subscribe(data => {
        this.resultado_qr = data['_body'];
        if (this.resultado_qr > 0) {
          this.traerInformacion(aula);
        } else {
          this.AlertMensaje(this.idioma.nocorrespondeaula , this.idioma.verifiqueaula); 
        }
      }, error => {
        console.log(error);// Error getting the data
      });
  }



  traerInformacion(aula) {
    let body: any;
    body = { "aula": aula };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/traerCursoPorDiaAula", body)
      .subscribe(data => {
        this.exite = 1;
        this.datos = data.json();
        try {
          this.traerAlumnos(this.datos[0].id_curso);
        }
        catch (error) {
          this.AlertMensaje(this.idioma.noseencontraroncursos, this.idioma.dirijaseadmin);;
        }
      });
  }
  AlertMensaje(titulo: string, mens: string) {
    let ventana = this.alertCtrl.create({
      title: titulo,
      message: mens,
      buttons: [
        {
          text: this.idioma.aceptar,
          handler: data => {
            console.log('Mensaje de Alerta');
          }
        }
      ]

    });
    ventana.present(ventana);
  }

  traerAlumnos(idCurso) {
    let body: any;
    body = { "idCurso": idCurso };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/listaPorCurso", body)
      .subscribe(data => {
        this.alumnos = data.json();
      }, error => {
        console.log(error);// Error getting the data
      });
  }
}
