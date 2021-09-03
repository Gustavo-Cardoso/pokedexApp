import { IPokemon } from './../models/IPokemon.model';
import { PokemonService } from './../services/pokemon.service';
import { Router } from '@angular/router';
import { DadosService } from './../services/dados.service';
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

  listaPokemon: IPokemon[] = [];

  listaPokemonFiltrada: IPokemon[] = [];

  constructor(
    private dadosService: DadosService,
    private router: Router,
    private pokemonService: PokemonService) {

    this.buscarPokemonAPI();
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
        pokemon.name.toLowerCase().includes(busca.trim().toLowerCase())
      );
    }
  }

  abrirPokemon(pokemon: any): void{
    // salva o pokemon clicado no serviço de dados temporário
    this.dadosService.setDados('pokemon', pokemon);

    // Navega até a página para exibir os dados
    this.router.navigateByUrl('/dados-pokemon');

  }

  buscarPokemonAPI(): void{
    this.pokemonService.buscarPokemons().subscribe(dadosRetorno => {
      console.log(dadosRetorno); // Pega a lista de pokemons da API

      // Percorre a lsita de Pokemons para buscar os dados de cada pokemon.
      for(const item of dadosRetorno.results) {

        // Busca na API os dados de cada pokemon
        this.pokemonService.buscarPokemon(item.url).subscribe(dadosPokemon => {
          this.listaPokemon.push(dadosPokemon);
        });
      }

      this.retonarPokemon();
    });
  }
}
