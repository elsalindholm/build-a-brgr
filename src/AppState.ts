import { action, observable } from 'mobx';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  MENU = 'menu',
}

export class AppState {
  @observable public currentPage = Page.MENU;

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }
}
