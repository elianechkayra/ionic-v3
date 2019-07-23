import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../modules/item/item.model";

@Injectable()
export class ShoppingListService{

    private shopplingListRef = this.db.list<Item>('shopping-list');

    constructor( private db: AngularFireDatabase){

    }

    getShoppingList(){
        return this.shopplingListRef;
    }

    addItem(item:Item){
        return this.shopplingListRef.push(item);

    }
}