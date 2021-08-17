import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

// Array que ira armazenar os dados em memoria.
// Servira como um BD temporario para nossa aplicacao.
private dados = [];

constructor() { }

  setDados(chave: string, dado: any): boolean {

  if (chave && chave.trim()!== '') {
    this.dados[chave.trim()] = dado;
    return true;
  }

  return false;
  }

  getDados(chave: string): any {
    if (chave && chave.trim() !== '') {
      return this.dados[chave. trim()];
    }
  }

  deleteDados(chave: string): boolean {
    if (chave && chave.trim() !== '') {
      delete this.dados[chave.trim()];
      return true;
    }
    return false;
  }
}
