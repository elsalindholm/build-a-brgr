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
import { OrderPageComp } from './OrderPages/OrderPage';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    // if we're on order page, just show order page
    if (this.appState.currentPage === Page.ORDER) {
      return <OrderPageComp appState={this.appState} />;
    }

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
          appState={this.appState}
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
