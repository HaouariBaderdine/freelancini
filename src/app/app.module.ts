import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionComponent } from './Authantification/connection/connection.component';
import { InscriptionComponent } from './Authantification/inscription/inscription.component';
import { DeconnectionComponent } from './Authantification/deconnection/deconnection.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { HeaderComponent } from './home/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    DeconnectionComponent,
    AccueilComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
