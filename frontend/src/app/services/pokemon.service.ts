import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endpoint: string = "http://localhost:8080/pokemon"

  constructor(private http: HttpClient) { }

  getAllPokemons(){
    return this.http.get<Array<IPokemon>>(this.endpoint);
  }
}