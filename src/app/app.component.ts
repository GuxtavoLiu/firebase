import { Component } from '@angular/core';
import { Contato } from './contato/entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { ContatoService } from './contato/servico/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site';

  constructor(private contatoService: ContatoService) {

  }
  salvar() {
   
  }








}
