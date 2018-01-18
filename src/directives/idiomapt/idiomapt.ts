import { Directive } from '@angular/core';

/**
 * Generated class for the IdiomaptDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[idiomapt]' // Attribute selector
})
export class IdiomaptDirective {

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
    console.log('Hello IdiomaptDirective Directive');
    ////pagina encuesta////
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
    ///////////////
  }

}
