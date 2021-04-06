import React from 'react';
import { AppState } from '../../AppState';
import { CartState } from '../../CartState';
import { MenuItem } from '../../MenuItems';

import './burger-ingredient-comp.scss';

export interface BurgerIngredientProps {
  menuItem: MenuItem;
  burgerState: CartState;
}

export class BurgerIngredientComp extends React.PureComponent<BurgerIngredientProps> {
  render() {
    const { menuItem, burgerState } = this.props;

    return (
      <div className={'burger-item'}>
        <div className={'name'}>{menuItem.name}</div>
        <div className={'dietary-info'}>
          {menuItem.vegetarian && <div className={'vegetarian'}>V</div>}
          {menuItem.vegan && <div className={'vegan'}>VG</div>}
        </div>
        <div className={'bi-price'}>£ {menuItem.price}</div>
        <button className={'button'} onClick={() => burgerState.addToCart(menuItem)}>
          {menuItem.buttonTxt}
        </button>
      </div>
    );
  }
}
