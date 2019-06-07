import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalvarComponent } from './contato/contato/salvar/salvar.component';
import { ContatoService } from './contato/servico/contato.service';


@NgModule({
  declarations: [
    AppComponent,
    SalvarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsdLTbK1tyeddXkJE3fASVxwx8AwKV4CQ",
      authDomain: "my-project-1493325606788.firebaseapp.com",
      databaseURL: "https://my-project-1493325606788.firebaseio.com",
      projectId: "my-project-1493325606788",
      storageBucket: "my-project-1493325606788.appspot.com",
      messagingSenderId: "29573432372",
      appId: "1:29573432372:web:8cecfaed954c060b"
    }),
    AngularFireDatabaseModule

  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
