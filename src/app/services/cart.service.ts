

import { CartItems } from './../models/cartItem';

import { Injectable } from '@angular/core';
import { Todos } from '../models/model';
import { CardItem } from '../models/cardItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Todos){
   let item = CartItems.find(c=> c.product.title===product.title)
   if(item) {
    item.quantity+=1
   }
   else{
    let cartItem = new CardItem();
    cartItem.product=product;
    cartItem.quantity=1;
    CartItems.push(cartItem)
   }
  }

  list():CardItem[]{
    return CartItems ;
  }

  removeFormCart(product:Todos) {
   let item = CartItems.find(c=> c.product.title===product.title)
    CartItems.splice(CartItems.indexOf(item),1)

  }


}
