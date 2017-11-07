import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AbmPage } from '../pages/abm/abm';
import { AdmPerfilPage } from '../pages/adm-perfil/adm-perfil';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { CursadasPage } from '../pages/cursadas/cursadas';
import { DescargasPage } from '../pages/descargas/descargas';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { GraficoEncuestaPage } from '../pages/grafico-encuesta/grafico-encuesta';
import { MainPage } from '../pages/main/main';
import { QRsPage } from '../pages/q-rs/q-rs';
import { HomePage } from '../pages/home/home';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AbmPage,
    AdmPerfilPage,
    AsistenciaPage,
    CursadasPage,
    DescargasPage,
    EncuestaPage,
    GraficoEncuestaPage,
    MainPage,
    QRsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AbmPage,
    AdmPerfilPage,
    AsistenciaPage,
    CursadasPage,
    DescargasPage,
    EncuestaPage,
    GraficoEncuestaPage,
    MainPage,
    QRsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
