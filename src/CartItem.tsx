import React from 'react';

import { MenuItem } from './MenuItems';

import './cart-item.scss';

export interface CartItemProps {
  cartItem: MenuItem;
}

export class CartItem extends React.PureComponent<CartItemProps> {
  render() {
    return (
      <div className={'cart-item'}>
        <div className={'name'}>{this.props.cartItem.name}</div>
        <div className={'price'}>£ {this.props.cartItem.price}</div>
      </div>
    );
  }
}
