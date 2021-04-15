import React from 'react';
import { AppState } from '../../AppState';

import { MenuItem } from '../../MenuItems';

import './menu-item-comp.scss';

export interface MicProps {
  menuItem: MenuItem;
  appState: AppState;
}

export class MenuItemComp extends React.PureComponent<MicProps> {
  render() {
    const { menuItem, appState } = this.props;

    return (
      <div className={'menu-item'}>
        <div className={'img-container'}>
          <img src={menuItem.image} alt={menuItem.name}></img>
        </div>
        <div className={'name'}>{menuItem.name}</div>
        <div className={'dietary-info'}>
          {menuItem.vegetarian && <div className={'vegetarian'}>V</div>}
          {menuItem.vegan && <div className={'vegan'}>VG</div>}
        </div>
        <div className={'price'}>£ {menuItem.price}</div>
        <button className={'mic-button'} onClick={() => appState.cartState.addToCart(menuItem)}>
          {menuItem.buttonTxt}
        </button>
      </div>
    );
  }
}
