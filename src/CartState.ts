import { action, observable } from 'mobx';

import { MenuItem } from './MenuItems';

export class CartState {
  @observable public cartItems: MenuItem[] = [];
  @observable public totalPrice: number = 0;
  @observable public vatAmount: number = 0;

  @action public addToCart(menuItem: MenuItem) {
    this.totalPrice += menuItem.price;
    this.setVat();
    this.cartItems.push(menuItem);
  }

  @action public removeFromCart(idx: number) {
    const removedItem = this.cartItems[idx];

    this.totalPrice -= removedItem.price;
    this.setVat();

    this.cartItems.splice(idx, 1);
  }

  @action public clearCart() {
    this.cartItems = [];
    this.totalPrice = 0;
  }

  @action public setVat() {
    this.vatAmount = this.totalPrice * 0.2;
  }
}
