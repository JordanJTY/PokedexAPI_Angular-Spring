import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPokemon } from '../interfaces/ipokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id: number;
  pokemon: IPokemon;

  constructor(private modalCrl: ModalController, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    console.log(`Pokemon ${this.id}`);
    this.getPokemon(this.id);
  }
  getPokemon(id: number) {
    this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
    });
  }

  close() {
    this.modalCrl.dismiss({ myreturnvalue: this.id });
  }
}
