import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddStokPage } from '../add-stok/add-stok';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {

  }
  goAdd()
  {
    this.navCtrl.push(AddStokPage);
  }
 
 
}
