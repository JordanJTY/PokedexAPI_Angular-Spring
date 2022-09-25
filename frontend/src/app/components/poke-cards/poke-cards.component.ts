import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss'],
})
export class PokeCardsComponent implements OnInit {

  @Input() numpokemon: number;
  @Input() name: string;
  @Input() type1: string;
  @Input() type2: string;

  constructor() { }

  ngOnInit() {}

}
