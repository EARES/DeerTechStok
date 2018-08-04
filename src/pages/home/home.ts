import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddStokPage } from '../add-stok/add-stok';
import { StokListService } from '../../services/stok-list/stok-list.service';
import { Observable } from '../../../node_modules/rxjs';
import { Item } from '../../models/item/item.model';
import firebase from '../../../node_modules/firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   items = [];
  constructor(public navCtrl: NavController, private stockList: StokListService) {

   this.getStockList();
  }
  goAdd()
  {
    this.navCtrl.push(AddStokPage);
  }
  getStockList(){
   firebase.database().ref('/stok/').once('value', (snapshot) => {
        snapshot.forEach( snap => {
         this.items.push(snap.val());
        });
      }); 
  }
 
 
}
