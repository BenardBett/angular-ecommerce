import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  cart: any[];
  totalPrice: number;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.totalPrice = 0
    this.cart.forEach((item, index) => {
      this.totalPrice += item['price'];
    })
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }

  updateCart(): void {
    this.totalPrice = 0;
    this.cart = this.cartService.getCart();
    console.log(this.cart)
    this.cart.forEach((item, index) => {
      this.totalPrice += item['price'];
    })
  }

  removeItem(element: any): void {
    console.log(`remove ${element}`)
    this.cartService.removeItem(element);
  }

}
