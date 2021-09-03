import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: object[];
  images: any;
  constructor() {
    this.cart = [];
    this.images = {
      red: [
        '../assets/order/red.jpg',
        '../assets/order/red2.jpg',
      ],
      blue: [
        '../assets/order/blue.png',
        '../assets/order/blue2.png',
        '../assets/order/blue3.png',
      ],
      purple: [
        '../assets/order/purple.png',
        '../assets/order/purple2.png',
      ],
      black: [
        '../assets/order/black.png',
        '../assets/order/black2.png',
      ],
    };
  }

  getCart(): any {
    return this.cart;
  }

  addItem(item: any): void {
    item.image = this.images[item['color']][0];
    this.cart.push(item);
  }

  removeItem(element: any): void {
    this.cart.forEach((value, index)=>{
      if(value==element) this.cart.splice(index,1);
    });
  }
}
