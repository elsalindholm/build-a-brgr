import { action, observable } from 'mobx';

import { MenuItem } from './MenuItems';

export class CartState {
  @observable public cartItems: MenuItem[] = [];
  @observable public totalPrice: number = 0;
  @observable public burgerItems: MenuItem[] = [];
  @observable public burgerPrice: number = 0;

  @action public addToCart(menuItem: MenuItem) {
    this.totalPrice += menuItem.price;
    this.cartItems.push(menuItem);
  }

  @action public removeFromCart(idx: number) {
    const removedItem = this.cartItems[idx];

    this.totalPrice -= removedItem.price;

    this.cartItems.splice(idx, 1);
  }

  @action public addToBurger(menuItem: MenuItem) {
    this.burgerPrice += menuItem.price;
    this.burgerItems.push(menuItem);
  }
}
