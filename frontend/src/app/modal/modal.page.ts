import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  editable: boolean;

  constructor(private modalCtrl: ModalController, private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.editable = true;
  }

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
    console.log('Id return: ' + id);
    this.pokemonService.deletePokemon(id);
  }

  putPokemon(pokemon: IPokemon, id: number) {
    console.log('id ' + id + ' - pokemon ' + pokemon.hp)
    this.pokemonService.putPokemon(pokemon, id);
  }

  update() {
    const id = this.activatedRoute.snapshot.params.id;
    if (this.editable === true) {
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "false");
      });
      this.editable = false;
    } else {
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "true");
      });
      this.putPokemon(this.pokemon, id);
      this.editable = true;
      console.log('editable: ' + this.editable);
    }
  }
}

