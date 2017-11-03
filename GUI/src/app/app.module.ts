import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import {MainPage} from '../pages/mainPage/mainPage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Welcome} from "../pages/Welcome/welcome";
import {visualizzaPannello} from "../pages/visualizzaPannello/visualizzaPannello";
import {pianoDiStudi} from "../pages/pianoDiStudi/pianoDiStudi";
import {riepilogo} from "../pages/riepilogoEsami/riepilogo";
import {pagamenti} from "../pages/pagamenti/pagamenti";
import {libretto} from "../pages/libretto/libretto";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    Welcome,
    MainPage,
    pianoDiStudi,
    visualizzaPannello,
    riepilogo,
    pagamenti,
    libretto
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    Welcome,
    ContactPage,
    LoginPage,
    MainPage,
    pianoDiStudi,
    visualizzaPannello,
    riepilogo,
    pagamenti,
    libretto
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
