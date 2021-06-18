import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonNames: string[] = [];

  constructor(private pokemonService : PokemonsService) { }

  ngOnInit() {
    this.pokemonNames = this.pokemonService.getAllPokemonsNames()
  }

}
