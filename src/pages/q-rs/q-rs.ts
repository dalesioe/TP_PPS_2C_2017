import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';

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

  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: number;

  datos_qr: string;
  resultado_qr: number;

  
  constructor(public http: Http,private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');
  }

  Volver()
  {
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
    this.barcodeScanner.scan().then(barcodeData => {
      this.datos_qr = barcodeData.text;
      this.ProcesarQrAula(this.datos_qr);
    });
  }
  ProcesarQrAula(aula){
    let body: any;
    body = { "aula": aula , "id_Alumno": this.id };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/alumnoQr", body)
      .subscribe(data => {
        this.resultado_qr = data['_body'];
        if (this.resultado_qr > 0){
          alert("A usted le corresponde ingresar al aula");
        }else{
          alert("No le corresponde esta aula.");
        }
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  
}
