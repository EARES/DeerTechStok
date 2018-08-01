import { Injectable } from "../../../node_modules/@angular/core";
import { AngularFireDatabase } from "../../../node_modules/angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable()
export class StokListService {

      private stokListRef = this.db.list<Item>('stok');

    
    constructor(private db: AngularFireDatabase ) {}

   
    addItem(item: Item)
    {
        return this.stokListRef.push(item);
    }
}