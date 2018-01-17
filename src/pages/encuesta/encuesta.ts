import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { GraficoEncuestaPage } from '../grafico-encuesta/grafico-encuesta';
import { Http } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TranslateService } from '@ngx-translate/core';
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
  cantidadVotantes: number;
  nombreEncuesta: string;
  tipoEncuesta: string;
  op1Nombre: string;
  op2Nombre: string;
  duracion: number;
  existe: boolean;

  encuestasAlumno: any;
  encuestasProfesor: any;
  resultados: any;

  testqr: string;

  idioma: string;
  errorqr: string;
  encuestacreada: string;
  accionesencuesta: string;
  verresultados: string;
  eliminar: string;
  cancelar: string;
  modificacion: string;
  modificar: string;
  activar: string;
  encuestaactivada: string;
  ingreseopciones: string;
  datosincompletos: string;
  completedatos: string;
  felicitaciones: string;
  encuestamodificada: string;
  encuestaeliminada: string;
  deseaverresultados: string;
  aceptar: string;
  elijaopcion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public http: Http, private datePicker: DatePicker, private barcodeScanner: BarcodeScanner,
    public actionSheetCtrl: ActionSheetController, public traductor: TranslateService) {

    ////////IDIOMA//////////////
    this.idioma = this.traductor.currentLang;
    switch (this.idioma) {
      case "es":
        this.errorqr = "El codigo QR escaneado no se corresponde con encuestas"
        this.encuestacreada = 'Su encuesta fue creada con exito!'
        this.accionesencuesta = "Acciones de encuesta"
        this.verresultados = "Ver Resultados"
        this.eliminar = "Eliminar"
        this.cancelar = "Cancelar"
        this.modificacion = "Modificacion"
        this.modificar = "Modificar"
        this.activar = "Activar"
        this.encuestaactivada = "Su encuesta fue activada con exito!"
        this.ingreseopciones = "Ingrese las nuevas opciones"
        this.datosincompletos = "Datos incompletos!"
        this.completedatos = "Por favor complete los datos requeridos para proceder"
        this.felicitaciones = "Felicitaciones!"
        this.encuestamodificada = "Encuesta modificada con exito!"
        this.encuestaeliminada = "Encuesta eliminada con exito!"
        this.deseaverresultados = "Desea ver los resultados?"
        this.aceptar = "Aceptar"
        this.elijaopcion = "Elija su opcion"
        break;
      case "en":
        this.errorqr = "The scanned QR code does not correspond to surveys"
        this.encuestacreada = "Your survey was created successfully!"
        this.accionesencuesta = "Survey actions"
        this.verresultados = "See results"
        this.eliminar = "Delete"
        this.cancelar = "Cancel"
        this.modificacion = "Modification"
        this.modificar = "Modify"
        this.activar = "Activate"
        this.encuestaactivada = "Your survey was activated successfully!"
        this.ingreseopciones = "Enter the new options"
        this.datosincompletos = "Incomplete data!"
        this.completedatos = "Please complete the information required to proceed"
        this.felicitaciones = "Congratulations!"
        this.encuestamodificada = "Survey modified with success!"
        this.encuestaeliminada = "Survey deleted successfully!"
        this.deseaverresultados = "Do you want to see the results?"
        this.aceptar = "To accept"
        this.elijaopcion = "Choose your option"
        break;
      case "pt":
        this.errorqr = "O código QR escaneado não corresponde a pesquisas"
        this.encuestacreada = "Sua pesquisa foi criada com sucesso!"
        this.accionesencuesta = "Ações de levantamento"
        this.verresultados = "Ver resultados"
        this.eliminar = "Excluir"
        this.cancelar = "Cancelar"
        this.modificacion = "Modificação"
        this.modificar = "Modificar"
        this.activar = "Ativar"
        this.encuestaactivada = "Sua pesquisa foi ativada com sucesso!"
        this.ingreseopciones = "Digite as novas opções"
        this.datosincompletos = "Dados incompletos!"
        this.completedatos = "Complete as informações necessárias para prosseguir"
        this.felicitaciones = "Parabéns!"
        this.encuestamodificada = "Pesquisa modificada com sucesso!"
        this.encuestaeliminada = "Pesquisa removida com sucesso!"
        this.deseaverresultados = "Você quer ver os resultados?"
        this.aceptar = "Aceitar"
        this.elijaopcion = "Escolha sua opção"

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
    this.existe = false;
    //////////////TRER ENCUESTAS DE ALUMNOS/////
    let datos = { "idAlumno": this.id }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/mostrarEncuestasPorAlumno", datos).subscribe(
      data => {
        this.encuestasAlumno = data.json()
        console.log(this.encuestasAlumno)
      });

    //////////////TRER ENCUESTAS DE PROFESOR/////
    let datos1 = { "idProfesor": 7 }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/mostrarEncuestasPorProf", datos1).subscribe(
      data => {
        this.encuestasProfesor = data.json()
        console.log(this.encuestasProfesor)
      });
  }

  LeerQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.testqr = barcodeData.text;
      //////SI ES PROFESOR///////
      if (this.tipo == 2) {
        this.encuestasProfesor.forEach(element => {
          ////SI ENCUENTRA LA ENCUESTA Y PERTENECE AL PROFESOR LOGUEADO 
          if (this.testqr == element.id_encuesta && this.id == element.id_profesor) {
            this.existe = true;
            this.VerResultado(element.id_encuesta, element.nombre_encuesta, element.opcion1, element.opcion2)
          }
          ////SI ENCUENTRA LA ENCUESTA Y NO PERTENECE AL PROFESOR LOGUEADO 
          else if (this.testqr == element.id_encuesta && this.id != element.id_profesor && element.activa == 0) {
            this.existe = true;
            this.VerResultado(element.id_encuesta, element.nombre_encuesta, element.opcion1, element.opcion2)
          }
        });
        if (!this.existe) {
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: this.errorqr,
            buttons: ['OK']
          });
          alert.present();
        }
      }
      ///////SI ES ALUMNO///////
      else if (this.tipo == 4) {
        this.encuestasAlumno.forEach(element => {
          ///////SI ENCUENTRA UNA ENCUESTA FINALIZADA
          if (this.testqr == element.id_encuesta && element.activa == 0) {
            this.existe = true;
            this.VerResultado(element.id_encuesta, element.nombre_encuesta, element.opcion1, element.opcion2)
          }
          /////////SI ENCUENTRA UNA ENCUESTA PARA VOTAR
          else if (this.testqr == element.id_encuesta && element.activa == 1) {
            this.existe = true;
            this.Votar(element.id_encuesta, element.opcion1, element.opcion2)
          }
        });
      }
      if (!this.existe) {
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: this.errorqr,
          buttons: ['OK']
        });
        alert.present();
      }
    });
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
    ///////////alert//////
    let alert = this.alertCtrl.create({
      title: this.felicitaciones,
      subTitle: this.encuestacreada,
      buttons: ['OK']
    });
    alert.present();
    //pongo todo en null
    this.curso = null;
    this.nombreEncuesta = null;
    this.op1Nombre = null;
    this.op2Nombre = null;
    this.duracion = null;
    this.CrearEncuestaSiNO = false;
  }

  MenuEncuesta2(id_encuesta, nombre_encuesta, opcion1, opcion2) {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.accionesencuesta,
      buttons: [
        {
          text: this.verresultados,
          handler: () => {
            this.VerResultado(id_encuesta, nombre_encuesta, opcion1, opcion2)
          }
        },
        {
          text: this.eliminar,
          handler: () => {
            this.EliminarEncuesta(id_encuesta)
          }
        },
        {
          text: this.cancelar,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  MenuEncuesta(id_encuesta, nombre_encuesta, opcion1, opcion2) {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.accionesencuesta,
      buttons: [
        {
          text: this.activar,
          handler: () => {
            this.ActivarEncuesta(id_encuesta)
          }
        }, {
          text: this.modificar,
          handler: () => {
            this.ModificarEncuesta(id_encuesta, nombre_encuesta, opcion1, opcion2)
          }
        }, {
          text: this.eliminar,
          handler: () => {
            this.EliminarEncuesta(id_encuesta)
          }
        },
        {
          text: this.cancelar,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }
  ActivarEncuesta(id_encuesta) {
    let datos = { "idEncuesta": id_encuesta }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/activarEncuestaProfesor", datos).subscribe(
      data => {
        ///////////alert//////
        let alert = this.alertCtrl.create({
          title: this.felicitaciones,
          subTitle: this.encuestaactivada,
          buttons: ['OK']
        });
        alert.present();

        this.Volver()
      });
  }
  ModificarEncuesta(id_encuesta, nombre_encuesta, opcion1, opcion2) {
    let prompt = this.alertCtrl.create({
      title: this.modificacion,
      message: this.ingreseopciones,
      inputs: [
        {
          name: 'opcion1',
          placeholder: 'OP1: ' + opcion1
        },
        {
          name: 'opcion2',
          placeholder: 'OP2: ' + opcion2
        },
      ],
      buttons: [
        {
          text: this.cancelar,
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.modificar,
          handler: data => {
            if (data.opcion1 == "" || data.opcion2 == "") {
              ///////////alert//////
              let alert = this.alertCtrl.create({
                title: this.datosincompletos,
                subTitle: this.completedatos,
                buttons: ['OK']
              });
              alert.present();
            }
            else {
              this.CambiarOpcionesEncuesta(id_encuesta, data.opcion1, data.opcion2)
            }
          }
        }
      ]
    });
    prompt.present();
  }
  CambiarOpcionesEncuesta(id_encuesta, opcion1, opcion2) {
    let datos = {
      "idEncuesta": id_encuesta,
      "opcion1": opcion1,
      "opcion2": opcion2
    }
    console.log(datos)
    this.http.post("http://www.estacionamiento.16mb.com/git/api/modificarEncuesta", datos).subscribe(
      data => {
        this.Volver()
      });
    ///////////alert//////
    let alert = this.alertCtrl.create({
      title: this.felicitaciones,
      subTitle: this.encuestamodificada,
      buttons: ['OK']
    });
    alert.present();

    this.Volver()
  }
  EliminarEncuesta(id_encuesta) {
    let datos = { "idEncuesta": id_encuesta }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/eliminarEncuesta", datos).subscribe(
      data => {
        ///////////alert//////
        let alert = this.alertCtrl.create({
          title: this.felicitaciones,
          subTitle: this.encuestaeliminada,
          buttons: ['OK']
        });
        alert.present();

        this.Volver()
      });
  }
  VerResultado(id_encuesta, nombre_encuesta, opcion1, opcion2) {

    let datos = { "idEncuesta": id_encuesta };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/mostrarDatosEncuestaPorId", datos).subscribe(
      data => this.resultados = data.json()
    );
    /////////////
    let confirm = this.alertCtrl.create({
      title: this.deseaverresultados,
      message: '',
      buttons: [
        {
          text: this.cancelar,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: this.aceptar,
          handler: () => {
            this.resultados.forEach(element => {
              this.op1 = element.op1;
              this.op2 = element.op2;
              this.cantidadVotantes = element.TOTAL_VOTANTES
            });
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
              "op2": this.op2,
              "cantidadVotantes": this.cantidadVotantes
            })
          }
        }
      ]
    });
    confirm.present();
  }

  VerEncuestas() {

  }
  Votar(id_encuesta, opcion1, opcion2) {

    let alert = this.alertCtrl.create();
    alert.setTitle(this.elijaopcion);

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
