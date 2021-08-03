import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Criação array pokemon

  listaPokemon= [
    {
      numero: '001',
      nome: 'Bulbasaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      tipos: [
        'Grass', 'Poison'
      ]
    },
    {
      numero: '002',
      nome: 'Ivysaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      tipos: [
        'Grass', 'Poison'
      ]
    },
    {
      numero: '002',
      nome: 'Venusaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      tipos: [
        'Grass', 'Poison'
      ]
    },
    {
      numero: '004',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      tipos: [
        'Fire'
      ]
    }
  ];

  constructor() {}

}
