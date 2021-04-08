import React from 'react';

import { ItemType, MenuItem } from './MenuItems';

import './cart-item.scss';
import { CartState } from './CartState';

export interface CartItemProps {
  cartItem: MenuItem;
  position: number;
  cartState: CartState;
}

export class CartItem extends React.PureComponent<CartItemProps> {
  render() {
    const { cartItem } = this.props;

    return (
      <div className={'cart-item'}>
        <div className={'item-info'}>
          <div className={'name'}>{this.props.cartItem.name}</div>
          <div className={'ci-price'}>£ {this.props.cartItem.price}</div>
          <button
            className={'button'}
            onClick={() => this.props.cartState.removeFromCart(this.props.position)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
