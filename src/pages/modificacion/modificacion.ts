import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the ModificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificacion',
  templateUrl: 'modificacion.html',
})
export class ModificacionPage {

  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  mail: string;

  idioma: string;
  felicitaciones: string;
  cambiodedatos: string;
  reiniciopass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public http: Http, public traductor: TranslateService) {
    ////////IDIOMA//////////////
    this.idioma = this.traductor.currentLang;
    switch (this.idioma) {
      case "es":
        this.felicitaciones = "Felicitaciones!";
        this.cambiodedatos = "Se han cambiado los datos del usuario de manera exitosa!";
        this.reiniciopass = "Se reiniciado su contraseña de manera exitosa!";
        break;
      case "en":
        this.felicitaciones = "Congratulations!";
        this.cambiodedatos = "The user data has been changed successfully!";
        this.reiniciopass = "Your password was successfully restarted!";
        break;
      case "pt":
        this.felicitaciones = "Parabéns!";
        this.cambiodedatos = "Os dados do usuário foram alterados com sucesso!";
        this.reiniciopass = "Sua senha foi reiniciada com sucesso!";
        break;
      case "al":
        this.felicitaciones = "Herzlichen Glückwunsch!";
        this.cambiodedatos = "Die Benutzerdaten wurden erfolgreich geändert!";
        this.reiniciopass = "Ihr Passwort wurde erfolgreich neu gestartet!";
        break;
    }
    ///////////////////////////////
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.dni = this.navParams.get('dni');
    this.mail = this.navParams.get('mail');

  }

  ModificarUsuario() {
    let datos = {
      "id": this.id,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "dni": this.dni,
      "mail": this.mail
    };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/modificarUsuario", datos).subscribe(
      data => console.log(data)
    );
    ///////////alert//////
    let alert = this.alertCtrl.create({
      title: this.felicitaciones,
      subTitle: this.cambiodedatos,
      buttons: ['OK']
    });
    alert.present();
    this.Cancelar();
  }

  restablecerPass() {
    let datos = {
      "id": this.id,
      "pass": this.dni
    };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/restablecerPass", datos).subscribe(
      data => console.log(data)
    );
    ///////////alert//////
    let alert = this.alertCtrl.create({
      title: this.felicitaciones,
      subTitle: this.reiniciopass,
      buttons: ['OK']
    });
    alert.present();
  }

  Cancelar() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificacionPage');
  }

}
