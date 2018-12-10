import { Injectable } from '@angular/core';
import { product } from 'src/app/class/storeInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: product[]

  constructor() { }

  confirmCart(cart) {
    this.cart = cart
  }
  get getCartItem():any {
    return this.cart
  }
}
