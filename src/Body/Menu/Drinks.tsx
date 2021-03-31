import React from 'react';

import './drinks.scss';
import { MenuItemComp } from './MenuItemComp';

import { fizzyElderflower, irnBru, lemonade, pepsiDrink } from '../../MenuItems';

export class DrinksPage extends React.PureComponent {
  public render() {
    return (
      <div className={'drinks-page'}>
        <div className={'drinks-page-title'}>Drinks</div>
        <div className={'drinks-page-blurb'}>Choose your drinks!</div>
        <div className={'drinks-display'}>
          <MenuItemComp menuItem={pepsiDrink} />
          <MenuItemComp menuItem={lemonade} />
          <MenuItemComp menuItem={fizzyElderflower} />
          <MenuItemComp menuItem={irnBru} />
        </div>
      </div>
    );
  }
}
