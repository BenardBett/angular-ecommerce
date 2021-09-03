import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  quantity: number;
  color: string;
  images: object;

  constructor(private cartService: CartService) { 
    this.quantity = 1;
    this.color = 'blue';
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

  ngOnInit(): void {
  }

  increaseQuantity(): void {
    console.log("increase quantity")
    this.quantity += 1;
    console.log(`quantity is ${this.quantity}`)
  }

  decreaseQuantity(): void {
    console.log("decrease quantity")
    this.quantity -= 1;
    console.log(`quantity is ${this.quantity}`)
  }

  changeColor(color: string): void {
    console.log(`new color ${color}`)
    this.color = color;
  }

  addToCart(): void {
    console.log("add this product to cart")
    let price = this.quantity * 1000;
    this.cartService.addItem({color: this.color, quantity: this.quantity, price: price})
  }
}
