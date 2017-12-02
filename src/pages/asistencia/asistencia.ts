import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AdmPerfilPage } from '../adm-perfil/adm-perfil';
import { Camera, CameraOptions } from '@ionic-native/Camera';
import firebase from 'firebase'


//import { File } from '@ionic-native/File';
/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

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
  asistencias: any;
  ultimaAsist: number;

  usuario: string;
  pass: string;

  Materia: number;
  Profesor: number;

  Aula: number;
  Dia: number;

  materias: any;
  profesores: any;
  alumnos: any;

  imagenes: string[] = [];
  verimagen: boolean = false;
  validoAsist: number;
  historicoAsistencia: boolean;
  mostrarHistorico: boolean;
  alumnosHistorico: any;
  listadoHistorico: boolean;

  verAsistencia: boolean = false;

  picdata: any;
  picurl: any;
  mypicref: any;

  constructor(public camara: Camera, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.mypicref=firebase.storage().ref('/');
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.mail = this.navParams.get('mail');
    this.password = this.navParams.get('password');
    this.legajo = this.navParams.get('legajo');
    this.tipo = this.navParams.get('tipo');
    this.mostrarHistorico = false;
    this.listadoHistorico = false;
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
  UltimaAsistenciaParaFoto(){
    this.http.get("http://www.estacionamiento.16mb.com/git/api/ultimaAsistencia")
    .subscribe(data => {
      this.ultimaAsist = data['_body'];
      console.log(data['_body']);
    }, error => {
      console.log(error);// Error getting the data
    });
  }
  fotoDeAula(){
    this.camara.getPicture({
      correctOrientation: true,
      quality: 50,
      destinationType: this.camara.DestinationType.DATA_URL,
      sourceType: this.camara.PictureSourceType.CAMERA,
      encodingType: this.camara.EncodingType.JPEG,
      saveToPhotoAlbum: true
    }).then(imagedata =>{
      this.picdata = imagedata;
      this.upload()
    })
  }
  upload(){
    this.mypicref.child('img').child('pic.jpeg')
    .putString(this.picdata,'base64',{contentType:'image/jpeg'})
    .then(savepic=>{
      this.picurl=savepic.downloadURL
    })
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

  listaAula() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.test_aula = barcodeData.text;
      this.traerInformacion(this.test_aula);
    });

  }
  traerInformacion(numeroAula) {
    let body: any;
    body = { "aula": numeroAula };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/traerCursoPorDiaAula", body)
      .subscribe(data => {
        this.test_data = data.json();
        try {
          this.traerAlumnos(this.test_data[0].id_curso);
          this.agregarAsistencia(this.test_data[0].id_curso);
          this.UltimaAsistenciaParaFoto();
          this.verAsistencia = true;
        }
        catch (error) {
          alert("No hay curso disponible.");
        }

      }, error => {
        console.log(error);// Error getting the data
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
  traerAlumnos(idCurso) {
    let body: any;
    body = { "idCurso": idCurso };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/listaPorCurso", body)
      .subscribe(data => {
        this.alumnos = data.json();
        console.log("LOG ALUMNOS" + this.alumnos);
        this.alumnos.forEach(element => {
          console.log(this.agregarDetalleAsistencia(element.id));
        });
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  validarAsistencia(idCurso) {
    let body: any;
    body = { "idCurso": idCurso };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/validarAsistencia", body)
      .subscribe(data => {
        this.validoAsist = data['_body'];
      }, error => {
        console.log(error);// Error getting the data
      });

  }
  agregarAsistencia(idCurso) {
    let body: any;
    body = { "idCurso": idCurso };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/agregarAsistencia", body)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  presente(idAlumno) {
    console.log(idAlumno);
    let body: any;
    body = { 'idAlumno': idAlumno };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/updateDetalleAsistencia", body)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }

  agregarDetalleAsistencia(idAlumno) {
    let body: any;
    body = { "idAlumno": idAlumno };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/agregarDetalleAsistencia", body)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  CancelarAsistencia() {
    this.http.get("http://www.estacionamiento.16mb.com/git/api/eliminarAsistencia")
      .subscribe(data => {
        this.alumnos = data.json();
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
    this.navCtrl.setRoot(MainPage);
  }
  modificarPerfil() {
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
  traerInformacionAsistencias() {
    this.http.get("http://www.estacionamiento.16mb.com/git/api/historicoAsistencia")
      .subscribe(data => {
        this.historicoAsistencia = data.json();
        this.mostrarHistorico = true;
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  asistenciaPorId(asistencia) {
    let body: any;
    body = { "idAsist": asistencia };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/asistenciaPorId", body)
      .subscribe(data => {
        this.alumnosHistorico = data.json();
        this.mostrarHistorico = false;
        this.listadoHistorico = true;
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
  mostrarprincipal() {
    this.listadoHistorico = false;
    this.mostrarHistorico = false;
  }
  tomarFoto() {
    this.camara.getPicture({
      correctOrientation: true
    })
      .then(imagenInfo => {
        this.imagenes.push(imagenInfo);
        /*let path = imagenInfo.substr(0, imagenInfo.lastInfexOf('/')+ 1);
        let nombre = imagenInfo.substr(imagenInfo.lastInfexOf('/')+ 1);
        let nuevoNombre = new Date().getMilliseconds() + '.jpg';
        this.file.moveFile(path,nombre,
                            cordova.file.dataDirectory, nuevoNombre)
                            .then((info:Entry) =>{
                              
                            })
                            .catch(error =>{
                              
                            })*/
      })
      .catch(error => {

      })
  }
  
}
