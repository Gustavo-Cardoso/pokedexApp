import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  templateUrl: './bulbasaur.page.html',
  styleUrls: ['./bulbasaur.page.scss'],
})
export class BulbasaurPage implements OnInit {

  pokemon = {
    numero: '001',
    nome: 'Bulbasaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    tipos: [
      'Grass', 'Poison'
    ]
  };

  numeropokemon: string;

  constructor() {}

  ngOnInit() {
  }

}
