import { Directive } from '@angular/core';

/**
 * Generated class for the IdiomaenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[idiomaen]' // Attribute selector
})
export class IdiomaenDirective {
  ///pagina abm////
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
  felicitaciones: string;
  usuarioeliminado: string;
  ////pagina encuesta////
  errorqr: string;
  encuestacreada: string;
  accionesencuesta: string;
  verresultados: string;
  eliminar: string;
  modificacion: string;
  activar: string;
  encuestaactivada: string;
  ingreseopciones: string;
  datosincompletos: string;
  completedatos: string;
  encuestamodificada: string;
  encuestaeliminada: string;
  deseaverresultados: string;
  elijaopcion: string;
  /////pagina QR/////
  nocorrespondeaula: string;
  verifiqueaula: string;
  noseencontraroncursos: string;
  dirijaseadmin: string;
  /////pagina ADMINISTRACION PERFIL/////
  cambiopass: string;
  cambioexitoso: string;
  /////pagina EXCEL/////
  listaduplicada: string;
  listaimportada: string;
  listaagregada: string;

  constructor() {
    console.log('Hello IdiomaenDirective Directive');
    ////pagina abm////
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
    this.felicitaciones = "Congratulations!";
    this.usuarioeliminado = "User successfully deleted";
    ////pagina encuesta////
    this.errorqr = "The scanned QR code does not correspond to surveys"
    this.encuestacreada = "Your survey was created successfully!"
    this.accionesencuesta = "Poll actions"
    this.verresultados = "See results"
    this.eliminar = "Delete"
    this.modificacion = "Modification"
    this.activar = "Activate"
    this.encuestaactivada = "Your survey was activated successfully!"
    this.ingreseopciones = "Enter the new options"
    this.datosincompletos = "Incomplete data!"
    this.completedatos = "Please complete the information required to proceed"
    this.encuestamodificada = "Survey modified with success!"
    this.encuestaeliminada = "Survey deleted successfully!"
    this.deseaverresultados = "Do you want to see the results?"
    this.elijaopcion = "Choose your option"
    /////pagina QR/////
    this.nocorrespondeaula = "This classroom does not belong"
    this.verifiqueaula = "Verify your classroom in administration"
    this.noseencontraroncursos = "No courses were found"
    this.dirijaseadmin = "Address to administration"
    /////pagina ADMINISTRACION PERFIL/////
    this.cambiopass = "Change of password"
    this.cambioexitoso = "Successful modification! please re-login."
    /////pagina EXCEL/////
    this.listaimportada = "This list has already been imported"
    this.listaduplicada = "Duplicate list"
    this.listaagregada = "The list was added successfully!"
  }

}
