import React from 'react';

import { MenuItem } from './MenuItems';

import './cart-item.scss';
import { CartState } from './CartState';

export interface CartItemProps {
  cartItem: MenuItem;
  position: number;
  cartState: CartState;
}

export class CartItem extends React.PureComponent<CartItemProps> {
  render() {
    return (
      <div className={'cart-item'}>
        <div className={'name'}>{this.props.cartItem.name}</div>
        <div className={'price'}>£ {this.props.cartItem.price}</div>
        <button
          className={'button'}
          onClick={() => this.props.cartState.removeFromCart(this.props.position)}
        >
          X
        </button>
      </div>
    );
  }
}
