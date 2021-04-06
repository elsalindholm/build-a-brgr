import { observer } from 'mobx-react';
import React from 'react';

import { AppState, MenuPage } from '../../AppState';
import { BurgersPage } from './Burgers';
import { SidesPage } from './Sides';
import { DrinksPage } from './Drinks';

import './menu.scss';

interface MenuProps {
  appState: AppState;
}

@observer
export class Menu extends React.PureComponent<MenuProps> {
  public render() {
    let menuPage: JSX.Element;
    switch (this.props.appState.currentMenuPage) {
      case MenuPage.BURGERS:
        menuPage = <BurgersPage appState={this.props.appState} />;
        break;
      case MenuPage.SIDES:
        menuPage = <SidesPage appState={this.props.appState} />;
        break;
      case MenuPage.DRINKS:
        menuPage = <DrinksPage appState={this.props.appState} />;
        break;
      default:
        menuPage = <BurgersPage appState={this.props.appState} />;
        break;
    }

    return (
      <div className={'menu-page'}>
        <div className={'menu-header'}>
          <div className={'menu-nb-button-container'}>
            <button
              className={'menu-nb-button'}
              onClick={() => this.props.appState.setCurrentMenuPage(MenuPage.BURGERS)}
            >
              Burgers
            </button>
            <button
              className={'menu-nb-button'}
              onClick={() => this.props.appState.setCurrentMenuPage(MenuPage.SIDES)}
            >
              Sides
            </button>
            <button
              className={'menu-nb-button'}
              onClick={() => this.props.appState.setCurrentMenuPage(MenuPage.DRINKS)}
            >
              Drinks
            </button>
          </div>
        </div>
        <div className={'menu-sub-page-container'}>{menuPage}</div>
      </div>
    );
  }
}
