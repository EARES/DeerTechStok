import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { HomePage } from '../home/home';
import { StokListService } from '../../services/stok-list/stok-list.service';

/**
 * Generated class for the AddStokPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-stok',
  templateUrl: 'add-stok.html',
})
export class AddStokPage {

  item: Item = {

    name: '',
    quantity: undefined,
    price: undefined

    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private stok: StokListService) {
  }
  addItem(item: Item)
  {

    this.stok.addItem(item).then(ref => {
      this.navCtrl.setRoot(HomePage, { key: ref.key} );
    });
  }
 
}
