import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/interfaces/ipokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {

  // @Input() numpokemon: number;
  // @Input() name: string;
  // @Input() type1: string;
  // @Input() type2: string;
  // @Input() hp: number;
  // @Input() attack: number;
  // @Input() defense: number;
  // @Input() sp_attack: number;
  // @Input() sp_defense: number;
  // @Input() speed: number;
  pokemon: IPokemon = null;
  editable: boolean;

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getPokemon(id);
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon.numpokemon)
    });
  }

  deletePokemon(id: number) {
    console.log('Id return: ' + id)
    // this.pokemonService.deletePokemon(id);
  }

  putPokemon(pokemon: IPokemon, id: number) {
    console.log('id ' + id + ' - pokemon ' + pokemon.hp)
    // this.pokemonService.putPokemon(pokemon, id);
  }

  update() {
    if (this.editable === true) {
      //document.getElementById('dataBox').setAttribute("readonly", "false");
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "false");
      });
      this.editable = false;
      console.log('editable: ' + this.editable);
    } else {
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "true");
      });
      console.log('HP ' + this.pokemon.hp);
      this.putPokemon(this.pokemon, this.pokemon.numpokemon);
      this.editable = true;
      console.log('editable: ' + this.editable);
    }
  }

}
