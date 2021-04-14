import { action, observable } from 'mobx';

import { MenuItem } from './MenuItems';

export class CartState {
  @observable public cartItems: MenuItem[] = [];
  @observable public totalPrice: number = 0;
  @observable public vatAmount: number = 0;

  @observable public orderButtonDisabled: boolean = true;

  @action public addToCart(menuItem: MenuItem) {
    this.totalPrice += menuItem.price;
    this.setVat();
    this.cartItems.push(menuItem);
    this.canOrder();
  }

  @action public removeFromCart(idx: number) {
    const removedItem = this.cartItems[idx];
    this.totalPrice -= removedItem.price;
    this.setVat();
    this.cartItems.splice(idx, 1);
    this.canOrder();
  }

  @action public clearCart() {
    this.cartItems = [];
    this.totalPrice = 0;
    this.vatAmount = 0;
    this.canOrder();
  }

  @action public setVat() {
    this.vatAmount = Math.round(this.totalPrice * 0.2 * 100 + Number.EPSILON) / 100;
  }

  @action public canOrder() {
    this.orderButtonDisabled = this.cartItems.length === 0;
  }
}
