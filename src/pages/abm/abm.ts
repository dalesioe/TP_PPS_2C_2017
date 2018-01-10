import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from 'ionic-angular';
import { ModificacionPage } from '../modificacion/modificacion';
import * as papa from 'papaparse';
import { Select } from 'ionic-angular/components/select/select';
//import 'rxjs/add/operator/map';
/**
 * Generated class for the AbmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-abm',
  templateUrl: 'abm.html',
})
export class AbmPage {
  archivotitulo: string;
  archivos: any;
  lista: any;
  Importacion: any;
  testRadioOpen: boolean;
  testRadioResult;
  csvData: any[] = [];
  headerRow: any[] = [];

  mail: string;
  nombre: string;
  apellido: string;
  dni: number;
  sexo: string;
  tipo: string;
  usuario: string;
  pass: string;
  listatodos: any;

  archivo: string;
  Fecha: Date;
  existe: boolean;
  tipoUsuario: string;
  api: string;
  AltaBaja: boolean = true;

  idioma: string;
  accionesusuario: string;
  aceptar: string;
  borrar: string;
  modificar: string;
  cancelar: string;
  agregado: string;
  exito: string;
  error: string;
  mensajeerror: string;
  elegirarchivo: string;
  archivoimportado: string;
  archivoduplicado: string;
  archivoagregado: string;
  procesofinalizado: string;

  constructor(private alertCtrl: AlertController, public file: File, public navCtrl: NavController, public navParams: NavParams
    , public actionSheetCtrl: ActionSheetController, public http: Http, public traductor: TranslateService) {
    ////////IDIOMA//////////////
    this.idioma = this.traductor.currentLang;
    switch (this.idioma) {
      case "es":
        this.accionesusuario = "Acciones de usuario";
        this.aceptar = "Aceptar";
        this.borrar = "Borrar";
        this.modificar = "Modificar";
        this.cancelar = "Cancelar";
        this.agregado = "Agregado";
        this.exito = "Exito al agregar el usuario";
        this.error = "Error";
        this.mensajeerror = "Se produjo un error, vuelva a intentar";
        this.elegirarchivo = "Elegir Archivo";
        this.archivoimportado = "El archivo ya fue importado";
        this.archivoduplicado = "Archivo duplicado";
        this.archivoagregado = "El archivo fue agregado exitosamente!";
        this.procesofinalizado = "Proceso finalizado";
        break;
      case "en":
        this.accionesusuario = "User Actions";
        this.aceptar = "To accept";
        this.borrar = "Delete";
        this.modificar = "Modify";
        this.cancelar = "Cancel";
        this.agregado = "Added";
        this.exito = "Success when adding the user";
        this.error = "Error";
        this.mensajeerror = "An error occurred, try again";
        this.elegirarchivo = "Choose File";
        this.archivoimportado = "The file has already been imported";
        this.archivoduplicado = "Duplicate file";
        this.archivoagregado = "The file was added successfully!";
        this.procesofinalizado = "Ended process";
        break;
      case "pt":
        this.accionesusuario = "Ações do usuário";
        this.aceptar = "Aceitar";
        this.borrar = "Excluir";
        this.modificar = "Borrar";
        this.cancelar = "Cancelar";
        this.agregado = "Adicionado";
        this.exito = "Sucesso ao adicionar o usuário";
        this.error = "Erro";
        this.mensajeerror = "Ocorreu um erro, tente novamente";
        this.elegirarchivo = "Escolha o arquivo";
        this.archivoimportado = "O arquivo já foi importado";
        this.archivoduplicado = "Arquivo duplicado";
        this.archivoagregado = "O arquivo foi adicionado com sucesso!";
        this.procesofinalizado = "Processo concluído";
        break;
    }
    ///////////////////////////////
    this.usuario = this.navParams.get('usuario');
    this.pass = this.navParams.get('pass');
    this.tipo = this.navParams.get('tipo');
    this.definirApi();
    this.tipoUsuario = this.navParams.get('tipoUsuario');
    this.http.get("http://www.estacionamiento.16mb.com/git/api/traerArchivos")
      .subscribe(data => {
        this.archivos = data.json();
      }, error => {
        console.log(error);
      });

    switch (this.tipo) {
      case "2":
        this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosProfes")
          .subscribe(data => {
            this.listatodos = data.json();
          }, error => {
            console.log(error);
          });
        break;
      case "3":
        this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosAdministrativos")
          .subscribe(data => {
            this.listatodos = data.json();
          }, error => {
            console.log(error);
          });
        break;
      case "4":
        this.http.get("http://www.estacionamiento.16mb.com/git/api/todoslosAlumnos")
          .subscribe(data => {
            this.listatodos = data.json();
          }, error => {
            console.log(error);
          });
        break;

    }

  }
  definirApi() {
    switch (this.tipo) {
      case "3":
        this.api = "http://www.estacionamiento.16mb.com/git/api/altaAdministrativo";
        break;
      case "2":
        this.api = "http://www.estacionamiento.16mb.com/git/api/altaProfesor";
        break;
      case "4":
        this.api = "http://www.estacionamiento.16mb.com/git/api/altaAlumno";
        break;
      default:
        break;
    }
  }
  mostrarAlert(exito) {
    if (exito == 1) {
      let alert = this.alertCtrl.create({
        title: this.agregado,
        subTitle: this.exito,
        buttons: ["Aceptar"]
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: this.error,
        subTitle: this.mensajeerror,
        buttons: ['Cancelar']
      });
      alert.present();
    }
  }

  AltaConArchivoProfesor() {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.elegirarchivo);

    alert.addInput({
      type: 'radio',
      label: 'Profesor',
      value: 'Profesor',
      checked: true
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: this.aceptar,
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;

        if (data) {
          switch (data) {
            case 'Profesor':
              this.archivo = 'Profesor1.csv';
              this.ComprobarArchivo();
              break;
          }
        }
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  AltaConArchivoAdminsitrativo() {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.elegirarchivo);

    alert.addInput({
      type: 'radio',
      label: 'Administrativo',
      value: 'Profesor',
      checked: true
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: this.aceptar,
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;

        if (data) {
          switch (data) {
            case 'Administrativo':
              this.archivo = 'Administrativo1.csv';
              this.ComprobarArchivo();
              break;
          }
        }
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  AltaConArchivoAlumno() {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.elegirarchivo);

    alert.addInput({
      type: 'radio',
      label: 'Alumno',
      value: 'Alumno',
      checked: true
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: this.aceptar,
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;

        if (data) {
          switch (data) {
            case 'Alumno':
              this.archivo = 'Alumnos1.csv';
              this.ComprobarArchivo();
              break;
          }
        }
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
  ComprobarArchivo() {
    if (this.archivo == this.archivotitulo) {
      this.existe = true;
    }
    this.archivos.forEach(element => {
      if (element.titulo == this.archivo) {
        this.existe = true;
        return;
      }
    })

    if (!this.existe) {
      this.readCsvData();
    } else {
      this.AlertMensaje(this.archivoimportado, this.archivoduplicado);
      this.existe = false;
    }
  }
  public readCsvData() {
    this.http.get('assets/archivos/' + this.archivo)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
  }
  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData).data;

    this.headerRow = parsedData[0];

    parsedData.splice(0, 1);
    this.csvData = parsedData;

    this.guardarLista();
  }
  public guardarLista() {
    //Guardamos la Importacion
    let datos = { "titulo": this.archivo };
    this.http.post("http://www.estacionamiento.16mb.com/git/api/subirArchivo", datos).subscribe(
      data => console.log(data)
    );
    for (var index = 0; index < this.csvData.length - 1; index++) {
      var element = this.csvData[index];
      var nombre = element[0];
      var apellido = element[1];
      var mail = element[2];
      var dni = element[3];
      var sexo = element[4];
      this.lista = {
        "nombre": nombre, "apellido": apellido, "mail": mail, "dni": dni, "sexo": sexo
      };
      this.http.post(this.api, this.lista).subscribe(
        data => console.log(data)
      );
    }
    this.existe = false;
    this.AlertMensaje(this.archivoagregado, this.procesofinalizado);
    this.archivotitulo = this.archivo;
    this.http.get("http://www.estacionamiento.16mb.com/git/api/traerArchivos")
      .subscribe(data => {
        this.archivos = data.json();
      }, error => {
        console.log(error);
      });
  }
  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  Alta() {
    let body: any;
    body = { "nombre": this.nombre, "apellido": this.apellido, "mail": this.mail, "dni": this.dni, "sexo": this.sexo };
    switch (this.tipo) {
      case "1":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAdmin", body)
          .subscribe(data => {
            this.mostrarAlert(1);
            this.Volver();
          }, error => {
            this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "3":
        this.http.post('http://www.estacionamiento.16mb.com/git/api/altaAdministrativo', body)
          .subscribe(data => {
            this.mostrarAlert(1);
            this.Volver();
          }, error => {
            this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "2":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaProfesor", body)
          .subscribe(data => {
            this.mostrarAlert(1);
            this.Volver();
          }, error => {
            this.mostrarAlert(0);// Error getting the data
          });
        break;

      case "4":
        this.http.post("http://www.estacionamiento.16mb.com/git/api/altaAlumno", body)
          .subscribe(data => {
            this.mostrarAlert(1);
            this.Volver();
          }, error => {
            this.mostrarAlert(0);// Error getting the data
          });
        break;

      default:
        console.log("error");
    }
  }
  Volver() {
    this.navCtrl.setRoot(MainPage, { "usuario": this.usuario, "pass": this.pass, "tipo": this.tipoUsuario });
  }
  AlertMensaje(titulo: string, mens: string) {

    let ventana = this.alertCtrl.create({
      title: titulo,
      message: mens,
      buttons: [
        {
          text: this.aceptar,
          handler: data => {
            console.log('Mensaje de Alerta');
          }
        }
      ]

    });
    ventana.present(ventana);
  }

  menu(id) {
    console.log(id);
    let actionSheet = this.actionSheetCtrl.create({
      title: this.accionesusuario,
      buttons: [
        {
          text: this.borrar,
          role: 'destructive',
          handler: () => {
            this.eliminarUsuario(id);
          }
        },
        {
          text: this.modificar,
          handler: () => {
            this.modificarUsuario(id);
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
  eliminarUsuario(id) {
    let datos = { "idUsuario": id }
    this.http.post("http://www.estacionamiento.16mb.com/git/api/bajaUsuario", datos).subscribe(
      data => {
        ///////////alert//////
        let alert = this.alertCtrl.create({
          title: 'Felicitaciones!',
          subTitle: 'Usuario eliminado exitosamente!',
          buttons: ['OK']
        });
        alert.present();

        this.Volver()
      });
  }
  modificarUsuario(id) {
    this.listatodos.forEach(element => {
      if (element.id == id) {
        this.navCtrl.push(ModificacionPage, {
          "id": element.id,
          "nombre": element.nombre,
          "apellido": element.apellido,
          "dni": element.dni,
          "mail": element.mail
        })
      }
    });
  }
}
