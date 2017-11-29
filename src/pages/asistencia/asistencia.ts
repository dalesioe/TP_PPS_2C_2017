import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AdmPerfilPage } from '../adm-perfil/adm-perfil';
/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  password: string;
  legajo: number;
  tipo: number;

  test_aula: string;
  test_data: any;
  asistencia: number;
  asist: number;

  usuario: string;
  pass: string;

  Materia: number;
  Profesor: number;
  
  Aula: number;
  Dia: number;

  materias: any;
  profesores: any;
  alumnos: any;

  verAsistencia: boolean = false;

  constructor(private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');
    /////////////TRAER MATERIAS Y AULAS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/traerTodasLasMaterias")
      .subscribe(data => {
        this.materias = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
    /////////////TRAER PROFESORES///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosProfes")
      .subscribe(data => {
        this.profesores = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  traer() {
    this.verAsistencia = false;
    /////////////TRAER ALUMNOS///////////////
    this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosAlumnos")
      .subscribe(data => {
        this.alumnos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  VolverEleccion() {
    this.Materia = null;
    this.Profesor = null;
    this.Aula = null;
    this.Dia = null;
    this.verAsistencia = true;
  }
  ConfirmarAsistencia() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmacion',
      message: '¿Desea confirmar la asistencia marcada?',
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
            this.VolverEleccion();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();


  }

  listaAula(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.test_aula = barcodeData.text;
      this.traerInformacion(this.test_aula);
    });  
    
  }
  traerInformacion(numeroAula){
    let body: any;
    body = {"aula": numeroAula};
    this.http.post("http://www.estacionamiento.16mb.com/git/api/traerCursoPorDiaAula", body)
    .subscribe(data => {     
      this.test_data = data.json();
      this.traerAlumnos(this.test_data[0].id_curso);
      this.agregarAsistencia(this.test_data[0].id_curso);    
      this.verAsistencia = true;
    }, error => {
      console.log(error);// Error getting the data
    });
  }

  Volver() {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass })
  }
  traerAlumnos(idCurso){
    let body: any;
    body = {"idCurso": idCurso};
    this.http.post("http://www.estacionamiento.16mb.com/git/api/listaPorCurso", body)
    .subscribe(data => {     
      this.alumnos = data.json();
      console.log("LOG ALUMNOS"+this.alumnos);
      this.alumnos.forEach(element => {
        //this.agregarDetalleAsistencia(element.id);
          console.log(this.agregarDetalleAsistencia(element.id));
      });
      //console.log(this.test_data);
    }, error => {
      console.log(error);// Error getting the data
    });
  }
  validarAsistencia(idCurso){
    let body: any;
    body = {"idCurso": idCurso};
    this.http.post("http://www.estacionamiento.16mb.com/git/api/validarAsistencia", body)
    .subscribe(data => {     
      console.log(data['_body']);
    }, error => {
      console.log(error);// Error getting the data
    });
    
  }
  agregarAsistencia(idCurso){
    let body: any;
    body = {"idCurso": idCurso};
    this.http.post("http://www.estacionamiento.16mb.com/git/api/agregarAsistencia", body)
    .subscribe(data => {     
      console.log(data['_body']);
    }, error => {
      console.log(error);// Error getting the data
    });
  }
  presente(idAlumno){
    console.log(idAlumno);
    let body: any;
    body = {'idAlumno': idAlumno };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/updateDetalleAsistencia", body)
    .subscribe(data => {
      console.log(data['_body']);
    },error => {
      console.log(error);
    });
  }

  agregarDetalleAsistencia(idAlumno){
    let body: any;
    body = {"idAlumno": idAlumno };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/agregarDetalleAsistencia", body)
    .subscribe(data => {     
      console.log(data['_body']);
    }, error => {
      console.log(error);// Error getting the data
    });
  }
  CancelarAsistencia(){
    this.http.get("http://www.estacionamiento.16mb.com/git/api/eliminarAsistencia")
    .subscribe(data => {
      this.alumnos = data.json();
      console.log(data['_body']);
    }, error => {
      console.log(error);// Error getting the data
    });
    this.navCtrl.setRoot(MainPage);
  }
  modificarPerfil(){
    this.navCtrl.setRoot(AdmPerfilPage, {
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
