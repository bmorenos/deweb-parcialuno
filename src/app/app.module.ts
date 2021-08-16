import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ReactiveFormsModule } from '@angular/forms';

import {app_routing} from "./app.routes";
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SegundaComponent } from './segunda/segunda.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    HomeComponent,
    WelcomeComponent,
    SegundaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
