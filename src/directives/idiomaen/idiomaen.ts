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
  /////pagina QR/////
  nocorrespondeaula: string;
  verifiqueaula: string;
  noseencontraroncursos: string;
  dirijaseadmin: string;

  constructor() {
    console.log('Hello IdiomaenDirective Directive');
    ////pagina encuesta////
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
    /////pagina QR/////
    this.nocorrespondeaula = "This classroom does not belong"
    this.verifiqueaula = "Verify your classroom in administration"
    this.noseencontraroncursos = "No courses were found"
    this.dirijaseadmin = "Address to administration"
  }

}
