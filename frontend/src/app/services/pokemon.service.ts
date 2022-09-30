import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endpoint: string = "http://localhost:8080/pokemon"

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<Array<IPokemon>>(this.endpoint);
  }

  getPokemon(id: number) {
    return this.http.get<IPokemon>(this.endpoint + "/" + id);
  }

  deletePokemon(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }

  postPokemon(pokemon: IPokemon) {
    this.http.post(this.endpoint, pokemon).subscribe(data => { });
  }

  putPokemon(pokemon: IPokemon, id: number) {
    this.http.put(this.endpoint + "/" + id, pokemon).subscribe(data => { });
  }
}
