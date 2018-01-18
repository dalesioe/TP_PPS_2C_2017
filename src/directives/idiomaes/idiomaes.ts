import { Directive } from '@angular/core';

/**
 * Generated class for the IdiomaesDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[idiomaes]' // Attribute selector
})
export class IdiomaesDirective {

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

  constructor() {
    console.log('Hello IdiomaesDirective Directive');
    ////pagina encuesta////
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
    //////////
  }

}
