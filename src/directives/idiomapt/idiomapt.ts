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
    console.log('Hello IdiomaptDirective Directive');
    ////pagina abm////
    this.accionesusuario = "Ações do usuário";
    this.aceptar = "Aceitar";
    this.borrar = "Excluir";
    this.modificar = "Modificar";
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
    this.felicitaciones = "Parabéns!";
    this.usuarioeliminado = "Usuário excluído com êxito";
    ////pagina encuesta////
    this.errorqr = "O código QR escaneado não corresponde a pesquisas"
    this.encuestacreada = "Sua pesquisa foi criada com sucesso!"
    this.accionesencuesta = "Ações de Pesquisa"
    this.verresultados = "Ver resultados"
    this.eliminar = "Excluir"
    this.modificacion = "Modificação"
    this.activar = "Ativar"
    this.encuestaactivada = "Sua pesquisa foi ativada com sucesso!"
    this.ingreseopciones = "Digite as novas opções"
    this.datosincompletos = "Dados incompletos!"
    this.completedatos = "Complete as informações necessárias para prosseguir"
    this.encuestamodificada = "Pesquisa modificada com sucesso!"
    this.encuestaeliminada = "Pesquisa removida com sucesso!"
    this.deseaverresultados = "Você quer ver os resultados?"
    this.elijaopcion = "Escolha sua opção"
    /////pagina QR/////
    this.nocorrespondeaula = "Esta sala de aula não pertence"
    this.verifiqueaula = "Verifique sua sala de aula na administração"
    this.noseencontraroncursos = "Nenhum curso foi encontrado"
    this.dirijaseadmin = "Endereço para administração"
    /////pagina ADMINISTRACION PERFIL/////
    this.cambiopass = "Mudança de senha"
    this.cambioexitoso = "Modificação bem-sucedida! por favor registe-se"
    /////pagina EXCEL/////
    this.listaimportada = "Esta lista já foi importada"
    this.listaduplicada = "Lista duplicada"
    this.listaagregada = "A lista foi adicionada com sucesso!"
  }

}
