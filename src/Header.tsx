import React from 'react';
import { Page, AppState } from './AppState';
import './header.scss';

interface HeaderProps {
  appState: AppState;
}

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
            <button className={'nb-button'} onClick={() => appState.setCurrentPage(Page.HOME)}>
              Home
            </button>
          </div>
          <div>
            <button className={'nb-button'} onClick={() => appState.setCurrentPage(Page.MENU)}>
              Menu
            </button>
          </div>
          <div>
            <button className={'nb-button'} onClick={() => appState.setCurrentPage(Page.ABOUT)}>
              About
            </button>
          </div>
        </div>
        <div className={'cart-container'}>
          <div className={'cart-img-container'} onClick={() => appState.setCartOpen(true)}></div>
        </div>
      </div>
    );
  }
}
