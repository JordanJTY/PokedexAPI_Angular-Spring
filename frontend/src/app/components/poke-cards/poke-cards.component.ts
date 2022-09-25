import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss'],
})
export class PokeCardsComponent implements OnInit {

  @Input() numpokemon: string;
  @Input() type1: string;
  @Input() type2: string;

  constructor() { }

  ngOnInit() {}

}
