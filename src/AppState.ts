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
  ORDERPLACED = 'orderPlaced',
}

export enum CartStage {
  OPEN = 'open',
  CLOSING = 'closing',
  CLOSED = 'closed',
}

export class AppState {
  public readonly cartState = new CartState();

  @observable public cartOpen: CartStage = CartStage.CLOSED;

  @observable public currentPage = Page.HOME;
  @observable public currentMenuPage = MenuPage.BURGERS;
  @observable public currentOrderPage = OrderPage.CARTSUMMARY;

  @action public setCartOpen() {
    this.cartOpen = CartStage.OPEN;
  }

  @action public setCartClosing() {
    this.cartOpen = CartStage.CLOSING;
  }

  @action public setCartClosed() {
    if (this.cartOpen === CartStage.CLOSING) {
      this.cartOpen = CartStage.CLOSED;
    }
  }

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }

  @action public setCurrentMenuPage(menuPage: MenuPage) {
    this.currentMenuPage = menuPage;
  }

  @action public setCurrentOrderPage(orderPage: OrderPage) {
    this.currentOrderPage = orderPage;
  }

  @action public enterOrderFlow() {
    this.cartOpen = CartStage.CLOSED;
    this.currentPage = Page.ORDER;
    this.currentOrderPage = OrderPage.CARTSUMMARY;
  }

  @action public exitOrderFlow() {
    this.cartOpen = CartStage.CLOSED;
    this.currentPage = Page.HOME;
    this.currentOrderPage = OrderPage.CARTSUMMARY;
  }

  @action exitCompletedOrder() {
    this.cartState.clearCart();
    this.currentPage = Page.HOME;
    this.currentOrderPage = OrderPage.CARTSUMMARY;
  }
}
