import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {

  @Input() numpokemon: number;
  @Input() name: string;
  @Input() type1: string;
  @Input() type2: string;
  @Input() hp: number;
  @Input() attack: number;
  @Input() defense: number;
  @Input() sp_attack: number;
  @Input() sp_defense: number;
  @Input() speed: number;

  constructor() { }

  ngOnInit(): void {
  }

}
