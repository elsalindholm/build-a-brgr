import { action, observable } from 'mobx';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  MENU = 'menu',
}

export enum MenuPage {
  BURGERS = 'burgers',
  SIDES = 'sides',
  DRINKS = 'drinks',
}

export class AppState {
  @observable public currentPage = Page.ABOUT;
  @observable public currentMenuPage = MenuPage.BURGERS;

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }

  @action public setCurrentMenuPage(menuPage: MenuPage) {
    this.currentMenuPage = menuPage;
  }
}
