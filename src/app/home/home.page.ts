import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Criação array pokemon
  // [] => representa um array (Lista)
  // {} => representa um objeto (Item)

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
      numero: '003',
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
    },
    {
      numero: '005',
      nome: 'Charmeleon',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      tipos: [
        'Fire'
      ]
    },
    {
      numero: '006',
      nome: 'Charizard',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      tipos: [
        'Fire'
      ]
    },
    {
      numero: '007',
      nome: 'Squirtle',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      tipos: [
        'Water'
      ]
    },
    {
      numero: '008',
      nome: 'Wartortle',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
      tipos: [
        'Water'
      ]
    },
    {
      numero: '009',
      nome: 'Blastoise',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
      tipos: [
        'Water'
      ]
    },
    {
      numero: '010',
      nome: 'Caterpie',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
      tipos: [
        'Bug'
      ]
    }
  ];

  listaPokemonFiltrada = [];

  constructor() {
    this.retonarPokemon();
  }

  retonarPokemon(): void{
    this.listaPokemonFiltrada = this.listaPokemon;
  }

  buscarPokemon(evento): void {
    this.retonarPokemon(); // Coloca todos os pokemons na lista Filtrada

    // Pega o valor digitado no campo de busca
    const busca: string = evento.target.value;

    if(busca && busca.trim() !== ''){// Testa se tem alguma coisa no campo
      this.listaPokemonFiltrada = this.listaPokemon.filter(pokemon =>
        pokemon.nome.toLowerCase().includes(busca.trim().toLowerCase())
      );
    }


  }

}
