import { Injectable } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  contato: Contato = new Contato();
  constructor(private base: AngularFireDatabase) { }


  salvar() {
    this.base.list('contato').push(this.contato);
    this.contato = new Contato;
  }

}
