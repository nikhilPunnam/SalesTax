import { Item } from './item.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProductService{

    taxType  = ['NonTax', 'SalesTax', 'DutyTax'];

    private items: Item[] = [
        new Item(
            'Book',
            'Novel',
            12.49,
            this.taxType[0],
            false
        ),
        new Item(
            'Music CD',
            'Top 100 Tracks',
            14.99,
            this.taxType[1],
            false
        ),
        new Item(
            'Chocolate Bar',
            'Peanut',
            0.85,
            this.taxType[0],
            false
        ),
        new Item(
            'Box of Chocolates',
            'Imported Caramel',
            10,
            this.taxType[0],
            true
        ),
        new Item(
            'Calvin Klein Perfume',
            'Imported Fragrance',
            47.50,
            this.taxType[2],
            true
        ),
        new Item(
            'Box of Chocolates',
            'Imported Dark Choco',
            11.25,
            this.taxType[0],
            true
        ),
        new Item(
            'Versace Perfume',
            'Imported Fragrance',
            27.99,
            this.taxType[2],
            true
        ),
        new Item(
            'Ralph Lauren Perfume',
            '8.5 Fl Oz',
            18.99,
            this.taxType[1],
            false
        ),
        new Item(
            'Headache Pills',
            'Pack of 5',
            9.75,
            this.taxType[0],
            false
        ),
        new Item(
            'Milk',
            'Dairy Pure Gallon Milk',
            3,
            this.taxType[0],
            false
        ),
        new Item(
            'Gallon Water',
            'Spring Water',
            1.99,
            this.taxType[0],
            false
        ),
        new Item(
            'T-Shirt',
            'Polo V-neck',
            6.49,
            this.taxType[1],
            false
        ),
    ]

    cartItems: Item[] = [];

    getItem(){
        return this.items.slice();
    }

    addItemToCart(item: Item){
        this.cartItems.push(item);
        return this.cartItems.slice();
    }

    removeItemFromCart(item: Item){
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
    }

    emptyCartItems(){
        this.cartItems.length = 0;
    }

}