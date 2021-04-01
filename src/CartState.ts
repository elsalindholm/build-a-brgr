import { action, observable } from 'mobx';

import { MenuItem } from './MenuItems';

export class CartState {
  @observable public cartItems: MenuItem[] = [];
  @observable public totalPrice: number = 0;

  @action public addToCart(menuItem: MenuItem) {
    this.cartItems.push(menuItem);
  }
  @action public removeFromCart(id: string) {}
}
