import { action, observable } from 'mobx';

import { CartState } from './CartState';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  MENU = 'menu',
  ORDER = 'order',
}

export enum MenuPage {
  BURGERS = 'burgers',
  SIDES = 'sides',
  DRINKS = 'drinks',
}

export enum OrderPage {
  CARTSUMMARY = 'cartSummary',
  DELIVERYDETAILS = 'deliveryDetails',
  PAYMENT = 'payment',
  ORDERPLACED = 'orderPaced',
}

export class AppState {
  public readonly cartState = new CartState();

  @observable public cartOpen: boolean = false;

  @action public setCartOpen(open: boolean) {
    this.cartOpen = open;
  }

  @observable public currentPage = Page.ORDER;
  @observable public currentMenuPage = MenuPage.BURGERS;
  @observable public currentOrderPage = OrderPage.ORDERPLACED;

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }

  @action public setCurrentMenuPage(menuPage: MenuPage) {
    this.currentMenuPage = menuPage;
  }

  @action public setCurrentOrderPage(orderPage: OrderPage) {
    this.currentOrderPage = orderPage;
  }
}
