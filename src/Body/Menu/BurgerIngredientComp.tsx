import React from 'react';
import { AppState } from '../../AppState';
import { MenuItem } from '../../MenuItems';

import './burger-ingredient-comp.scss';

export interface BurgerIngredientProps {
  menuItem: MenuItem;
  appState: AppState;
}

export class BurgerIngredientComp extends React.PureComponent<BurgerIngredientProps> {
  render() {
    return (
      <div className={'burger-item'}>
        <div className={'name'}>{this.props.menuItem.name}</div>
        <div className={'dietary-info'}>
          {this.props.menuItem.vegetarian && <div className={'vegetarian'}>V</div>}
          {this.props.menuItem.vegan && <div className={'vegan'}>VG</div>}
        </div>
        <div className={'bi-price'}>£ {this.props.menuItem.price}</div>
        <button
          className={'button'}
          onClick={() => this.props.appState.cartState.addToCart(this.props.menuItem)}
        >
          {this.props.menuItem.buttonTxt}
        </button>
      </div>
    );
  }
}
