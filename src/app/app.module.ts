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
import { ApiabmProvider } from '../providers/apiabm/apiabm';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import {File} from '@ionic-native/file';
import { BarcodeScanner }from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';

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
    ChartsModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiabmProvider
  ]
})
export class AppModule { }
