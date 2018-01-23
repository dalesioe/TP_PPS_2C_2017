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
    console.log('Hello IdiomaesDirective Directive');
    ////pagina abm////
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
    this.felicitaciones = "Felicitaciones!";
    this.usuarioeliminado = "Usuario eliminado exitosamente";
    ////pagina encuesta////
    this.errorqr = "El codigo QR escaneado no se corresponde con encuestas"
    this.encuestacreada = 'Su encuesta fue creada con exito!'
    this.accionesencuesta = "Acciones de encuesta"
    this.verresultados = "Ver Resultados"
    this.eliminar = "Eliminar"
    this.modificacion = "Modificacion"
    this.activar = "Activar"
    this.encuestaactivada = "Su encuesta fue activada con exito!"
    this.ingreseopciones = "Ingrese las nuevas opciones"
    this.datosincompletos = "Datos incompletos!"
    this.completedatos = "Por favor complete los datos requeridos para proceder"
    this.encuestamodificada = "Encuesta modificada con exito!"
    this.encuestaeliminada = "Encuesta eliminada con exito!"
    this.deseaverresultados = "Desea ver los resultados?"
    this.elijaopcion = "Elija su opcion"
    /////pagina QR/////
    this.nocorrespondeaula = "No le corresponde esta aula"
    this.verifiqueaula = "Verifique su aula en administracion"
    this.noseencontraroncursos = "No se encontraron cursos"
    this.dirijaseadmin = "Diríjase a administración"
    /////pagina ADMINISTRACION PERFIL/////
    this.cambiopass = "Cambio de Contraseña"
    this.cambioexitoso = "Modificacion exitosa! por favor vuelva a iniciar sesion."
    /////pagina EXCEL/////
    this.listaimportada = "Esta lista ya fue importada"
    this.listaduplicada = "Lista duplicada"
    this.listaagregada = "La lista fue agregada exitosamente!"

  }

}
