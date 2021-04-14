import React from 'react';

import './drinks.scss';
import { MenuItemComp } from './MenuItemComp';

import { beer, fizzyElderflower, lemonade, pepsiDrink } from '../../MenuItems';
import { AppState } from '../../AppState';

interface DrinksProps {
  appState: AppState;
}

export class DrinksPage extends React.PureComponent<DrinksProps> {
  public render() {
    return (
      <div className={'drinks-page'}>
        <div className={'drinks-page-title'}>Drinks</div>
        <div className={'drinks-page-blurb'}>Stay hydrated with our refreshing drinks!</div>
        <div className={'drinks-display'}>
          <MenuItemComp menuItem={pepsiDrink} appState={this.props.appState} />
          <MenuItemComp menuItem={lemonade} appState={this.props.appState} />
          <MenuItemComp menuItem={fizzyElderflower} appState={this.props.appState} />
          <MenuItemComp menuItem={beer} appState={this.props.appState} />
        </div>
      </div>
    );
  }
}
