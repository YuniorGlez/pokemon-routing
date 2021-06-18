import { Injectable } from '@angular/core';
import axios from 'axios';
import pokemons from './../dataset/pokemons.json'
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getAllPokemonsNames() {
    return pokemons.map((p : { name : string, url : string}) => p.name)
  }

  async getOnePokemon(pokemonName: string): Promise<any>{
    const url = pokemons.find((p: { name: string, url: string }) => p.name == pokemonName)?.url as string;
    return axios.get(url).then(r => r.data);
  }
}
