import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ModalPage } from 'src/app/modal/modal.page';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss'],
})
export class PokeCardsComponent implements OnInit {

  @Input() idpoke: number;
  @Input() numpokemon: number;
  @Input() name: string;
  @Input() type1: string;
  @Input() type2: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async showModal(id: number) {

    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id },
      cssClass: 'my-custom-modal-css'
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Data returned', data )
  }

}
