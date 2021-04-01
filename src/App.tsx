import { observer } from 'mobx-react';
import React from 'react';

import { AppState, Page } from './AppState';
import { About } from './Body/About/About';
import { Home } from './Body/Home/Home';
import { Menu } from './Body/Menu/Menu';
import { Footer } from './Footer';
import { Header } from './Header';

import './app.scss';
import { Cart } from './Cart';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    let page: JSX.Element;
    switch (this.appState.currentPage) {
      case Page.HOME:
        page = <Home />;
        break;
      case Page.MENU:
        page = <Menu appState={this.appState} />;
        break;
      case Page.ABOUT:
        page = <About />;
        break;
      default:
        page = <Home />;
        break;
    }

    return (
      <>
        <Cart
          open={this.appState.cartOpen}
          onClose={() => this.appState.setCartOpen(false)}
          cartState={this.appState.cartState}
        />
        <Header appState={this.appState} />
        <div className={'body'}>
          <div className={'main-page-holder'}>{page}</div>
          <Footer />
        </div>
      </>
    );
  }
}
