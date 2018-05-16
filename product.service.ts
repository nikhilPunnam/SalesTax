import { Item } from './item.model';
import { Injectable} from '@angular/core';

@Injectable()
export class ProductService{

    cartItems: Item[] = [];
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

    // Method returns a copy of item list.
    getItem(){
        return this.items.slice(0);
    }

    // Method add the user selected item to the cart
    addItemToCart(item: Item){
        this.cartItems.push(item);
        alert(item.name + " has been added to the cart.");
        return this.cartItems.slice();
    }

    // To empty the cart
    emptyCartItems(){
        this.cartItems.length = 0;
    }

}