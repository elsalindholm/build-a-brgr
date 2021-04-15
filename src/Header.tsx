import { observer } from 'mobx-react';
import React from 'react';

import { Page, AppState } from './AppState';

import './header.scss';

interface HeaderProps {
  appState: AppState;
}

@observer
export class Header extends React.PureComponent<HeaderProps> {
  public render() {
    const { appState } = this.props;

    return (
      <div className={'header-container'}>
        <div className={'logo-container'}>
          <div>Build-A-BRGR</div>
        </div>
        <div className={'nb-button-container'}>
          <div>
            <button
              className={this.getClassName(Page.HOME)}
              onClick={() => appState.setCurrentPage(Page.HOME)}
            >
              Home
            </button>
          </div>
          <div>
            <button
              className={this.getClassName(Page.MENU)}
              onClick={() => appState.setCurrentPage(Page.MENU)}
            >
              Menu
            </button>
          </div>
          <div>
            <button
              className={this.getClassName(Page.ABOUT)}
              onClick={() => appState.setCurrentPage(Page.ABOUT)}
            >
              About
            </button>
          </div>
        </div>
        <div className={'cart-container'}>
          <div className={'header-price'}>Total £ {appState.cartState.totalPrice}</div>
          <div className={'cart-img-container'} onClick={() => appState.setCartOpen()}></div>
        </div>
      </div>
    );
  }

  private getClassName(heading: Page) {
    let normal = 'nb-button';

    const current = this.props.appState.currentPage;
    if (heading === current) {
      normal += ' selected';
    }
    return normal;
  }
}
