import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { GraficoEncuestaPage } from '../grafico-encuesta/grafico-encuesta';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
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

  idCurso: number;
  cursos: any;
  CrearEncuestaSiNO: boolean = false;
  curso: number;

  idEncuesta: string;
  op1: number;
  op2: number;
  nombreEncuesta: string;
  tipoEncuesta: string;
  op1Nombre: string = "examen escrito";
  op2Nombre: string = "examen oral";
  duracion: number;

  encuestas: any;
  resultados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public http: Http, private datePicker: DatePicker, private barcodeScanner: BarcodeScanner) {

    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');

    let datos = { "idAlumno": this.id }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/mostrarEncuestasPorAlumno", datos).subscribe(
      data => {
        this.encuestas = data.json()
        console.log(this.encuestas)
      });

    /*let body: any = { "idProfesor": this.id };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/cursosPorProfesor", body)
      .subscribe(data => {
        this.cursos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });*/
  }

  VerResultado(id_encuesta, nombre_encuesta, opcion1, opcion2) {

    let datos = { "idEncuesta": id_encuesta };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/mostrarDatosEncuestaPorId", datos).subscribe(
      //data => console.log(data.json())
      data => this.resultados = data.json()
    );

    /////////////
    let confirm = this.alertCtrl.create({
      title: 'Desea ver los resultados?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.resultados.forEach(element => {
              //console.log('op2: ' + element.op2);
              this.op1 = element.op1;
              this.op2 = element.op2;
            });
            ////////////////
            this.navCtrl.setRoot(GraficoEncuestaPage, {
              "id": this.id,
              "nombre": this.nombre,
              "apellido": this.apellido,
              "mail": this.mail,
              "password": this.password,
              "legajo": this.legajo,
              "tipo": this.tipo,

              "nombreEncuesta": nombre_encuesta,
              "op1Nombre": opcion1,
              "op2Nombre": opcion2,
              "op1": this.op1,
              "op2": this.op2
            })
            ////////////////////


          }
        }
      ]
    });
    confirm.present();
    ////////////////



  }
  LeerQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.idEncuesta = barcodeData.text;
      this.traerInformacion(this.idEncuesta);
    });
  }
  traerInformacion(idEncuesta) {

  }

  CrearEncuesta() {
    let datos = {
      "curso": this.curso,
      "nombre": this.nombreEncuesta,
      "opcion1": this.op1Nombre,
      "opcion2": this.op2Nombre,
      "duracion": this.duracion
    };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/ingresarEncuesta", datos).subscribe(
      data => console.log(data)
    );
    //poner un alert q avise
    alert("encuesta creada exitosamente");
    //pongo todo en null
    this.curso = null;
    this.nombreEncuesta = null;
    this.op1Nombre = null;
    this.op2Nombre = null;
    this.duracion = null;
    this.CrearEncuestaSiNO = false;
  }

  VerEncuestas() {

  }
  Votar(id_encuesta, opcion1, opcion2) {

    let alert = this.alertCtrl.create();
    alert.setTitle('Elija su opcion');

    alert.addInput({
      type: 'radio',
      label: opcion1,
      value: '1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: opcion2,
      value: '2',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.ActualizarVotoAlumno(id_encuesta, data);
      }
    });
    alert.present();
  }
  ActualizarVotoAlumno(id_encuesta, voto) {
    let datos = {
      "idEncuesta": id_encuesta,
      "idAlumno": this.id,
      "voto": voto
    }
    console.log(datos)
    this.http.post("http://www.estacionamiento.16mb.com/git/api/updateVotoAlumno", datos).subscribe(
      data => {
        this.Volver()
      });
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
