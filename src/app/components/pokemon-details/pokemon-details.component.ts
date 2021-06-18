import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  constructor(private pokemonsService: PokemonsService) {

  }

  async ngOnInit() {

    this.pokemon = await this.pokemonsService.getOnePokemon("bulbasaur");
  }

}
