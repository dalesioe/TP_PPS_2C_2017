import { Directive } from '@angular/core';

/**
 * Generated class for the IdiomaalDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[idiomaal]' // Attribute selector
})
export class IdiomaalDirective {

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
    this.accionesusuario = "Benutzeraktionen";
    this.aceptar = "Akzeptieren";
    this.borrar = "Löschen";
    this.modificar = "Ändern";
    this.cancelar = "Abbrechen";
    this.agregado = "Hinzugefügt";
    this.exito = "Erfolg beim Hinzufügen des Benutzers";
    this.error = "Fehler";
    this.mensajeerror = "Ein Fehler ist aufgetreten. Versuche es erneut";
    this.elegirarchivo = "Wählen Sie Datei";
    this.archivoimportado = "Die Datei wurde bereits importiert";
    this.archivoduplicado = "Datei duplizieren";
    this.archivoagregado = "Die Datei wurde erfolgreich hinzugefügt!";
    this.procesofinalizado = "Prozess abgeschlossen";
    this.felicitaciones = "Herzlichen Glückwunsch!";
    this.usuarioeliminado = "Benutzer wurde erfolgreich gelöscht";
    ////pagina encuesta////
    this.errorqr = "Der gescannte QR-Code entspricht nicht den Umfragen"
    this.encuestacreada = 'Ihre Umfrage wurde erfolgreich erstellt!'
    this.accionesencuesta = "Umfrageaktionen"
    this.verresultados = "Siehe Ergebnisse"
    this.eliminar = "Löschen"
    this.modificacion = "Änderung"
    this.activar = "Aktivieren"
    this.encuestaactivada = "Ihre Umfrage wurde erfolgreich aktiviert!"
    this.ingreseopciones = "Geben Sie die neuen Optionen ein"
    this.datosincompletos = "Unvollständige Daten!"
    this.completedatos = "Bitte füllen Sie die erforderlichen Informationen aus, um fortzufahren"
    this.encuestamodificada = "Umfrage erfolgreich modifiziert!"
    this.encuestaeliminada = "Umfrage erfolgreich entfernt!"
    this.deseaverresultados = "Willst du die Ergebnisse sehen?"
    this.elijaopcion = "Wählen Sie Ihre Option"
    /////pagina QR/////
    this.nocorrespondeaula = "Dieser Klassenraum gehört nicht dazu"
    this.verifiqueaula = "Überprüfen Sie Ihr Klassenzimmer in der Verwaltung"
    this.noseencontraroncursos = "Es wurden keine Kurse gefunden"
    this.dirijaseadmin = "Adresse an die Verwaltung"
    /////pagina ADMINISTRACION PERFIL/////
    this.cambiopass = "Passwort ändern"
    this.cambioexitoso = "Erfolgreiche Modifikation! Bitte loggen Sie sich erneut ein."
    /////pagina EXCEL/////
    this.listaimportada = "Diese Liste wurde bereits importiert"
    this.listaduplicada = "Doppelte Liste"
    this.listaagregada = "Die Liste wurde erfolgreich hinzugefügt!"
  }
}
