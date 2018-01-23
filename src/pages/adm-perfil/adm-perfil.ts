import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Camera, CameraOptions } from '@ionic-native/Camera';
import firebase from 'firebase'
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaesDirective } from '../../directives/idiomaes/idiomaes';
import { IdiomaenDirective } from '../../directives/idiomaen/idiomaen';
import { IdiomaptDirective } from '../../directives/idiomapt/idiomapt';
import { IdiomaalDirective } from '../../directives/idiomaal/idiomaal';
/**
 * Generated class for the AdmPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-perfil',
  templateUrl: 'adm-perfil.html',
})
export class AdmPerfilPage {

  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: number;
  foto: string;

  cambiar: boolean;
  respuesta: boolean;

  principioURL: string = "https://firebasestorage.googleapis.com/v0/b/fotos-aula.appspot.com/o/";
  finURL: string;

  picdata: any;
  picurl: any;
  mypicref: any;

  idioma: any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public camara: Camera, public alertCtrl: AlertController,
    public traductor: TranslateService, public es: IdiomaesDirective, public en: IdiomaenDirective, public pt: IdiomaptDirective, public al: IdiomaalDirective) {

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

      case "al":
        this.idioma = al;
        break;
    }
    ///////////////////////////////
    this.mypicref = firebase.storage().ref('/');
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');
    this.traerImagen(this.id);
  }

  Volver() {
    this.navCtrl.setRoot(MainPage, {
      "id": this.id,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "mail": this.mail,
      "password": this.password,
      "legajo": this.legajo,
      "tipo": this.tipo,
      "mensaje": null
    });
  }

  fotoDeAula() {
    this.camara.getPicture({
      correctOrientation: true,
      quality: 50,
      targetHeight: 200,
      targetWidth: 500,
      destinationType: this.camara.DestinationType.DATA_URL,
      sourceType: this.camara.PictureSourceType.CAMERA,
      encodingType: this.camara.EncodingType.JPEG,
      saveToPhotoAlbum: true
    }).then(imagedata => {
      this.picdata = imagedata;
      this.upload()
    })
  }
  upload() {
    this.mypicref.child('img').child(this.id + '.jpeg')
      .putString(this.picdata, 'base64', { contentType: 'image/jpeg' })
      .then(savepic => {
        this.picurl = savepic.downloadURL
      }).then(sarasa => {
        this.updateFoto();
      })

  }
  traerImagen(id) {
    let body: any;
    body = { "id": this.id };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/imagenUsuario", body)
      .subscribe(data => {
        this.finURL = data['_body'];
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  CambiarPW(pw1, pw2) {
    let body: any;
    body = { "id": this.id, "pw": pw1 };
    console.log(this.id + "ID");
    console.log("PW", pw1);
    this.http.post("http://www.estacionamiento.16mb.com/git/api/CambiarPassword", body)
      .subscribe(data => {
        this.respuesta = data['_body'];
        console.log(data.json());
        if (this.respuesta) {

          let alert = this.alertCtrl.create({
            title: this.idioma.cambiopass,
            subTitle: this.idioma.cambioexitoso,
            buttons: ['OK']
          });
          alert.present();

          this.cambiar = !this.cambiar;
          this.navCtrl.setRoot(HomePage);
        } else {
          alert("error al realizar cambio de clave");
        }
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  Cambiar() {
    this.cambiar = !this.cambiar;
  }
  updateFoto() {
    let body: any;
    var lastPart = this.picurl.split("/").pop();
    lastPart = lastPart.replace('&', '&amp;');
    body = { "foto": lastPart, "id": this.id };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/guardarImagenUsuario", body)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

}