import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { GraficoEncuestaPage } from '../grafico-encuesta/grafico-encuesta';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: number;

  cursos: any;
  CrearEncuestaSiNO: boolean = false;
  curso: string;
  op1: number = 5;
  op2: number = 11;
  nombreEncuesta: string;
  op1Nombre: string = "examen escrito";
  op2Nombre: string = "examen oral";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public http: Http) {

    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');

    let body: any = { "idProfesor": this.id };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/cursosPorProfesor", body)
      .subscribe(data => {
        this.cursos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }

  VerResultado() {
    this.navCtrl.setRoot(GraficoEncuestaPage, {
      "id": this.id,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "mail": this.mail,
      "password": this.password,
      "legajo": this.legajo,
      "tipo": this.tipo,

      "op1": this.op1,
      "op2": this.op2,
      "op1Nombre": this.op1Nombre,
      "op2Nombre": this.op2Nombre
    })

  }

  CrearEncuesta() {
    console.log(this.nombreEncuesta + this.op1Nombre + this.op2Nombre + this.curso)
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

}
