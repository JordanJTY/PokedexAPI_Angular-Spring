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
  editable: boolean;
  put: boolean;

  constructor(private modalCrl: ModalController, private pokemonService: PokemonService) {
    this.editable = true;
    this.put = false;
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

  deletePokemon(id: number) {
    console.log('Id return: ' + id)
    // this.pokemonService.deletePokemon(id);
  }

  putPokemon(pokemon: IPokemon, id: number){
    console.log('id'+ id + 'pokemon' + pokemon.hp)
    // this.pokemonService.putPokemon(pokemon, id);
  }

  update() {
    if (this.editable === true) {
      //document.getElementById('dataBox').setAttribute("readonly", "false");
      document.querySelectorAll('#dataBox').forEach(x => {
        x.setAttribute("readonly", "false");
      });

      this.editable = false;
      this.put = true;
      console.log('editable: ' + this.editable);
    } else {
      document.querySelectorAll('#dataBox').forEach(x => {
        x.setAttribute("readonly", "true");
      });
      if(this.put === true){
        this.putPokemon(this.pokemon, this.id);
      }
      this.editable = true;
      this.put = false;
      console.log('editable: ' + this.editable);
    }
  }

  close() {
    this.modalCrl.dismiss({ myreturnvalue: this.id });
  }
}

