import React from 'react';

import { CartState } from './CartState';

import './cart.scss';

interface CartProps {
  open: boolean;
  onClose: () => void;
  cartState: CartState;
}

export class Cart extends React.PureComponent<CartProps> {
  public render() {
    const { open, onClose } = this.props;
    const openClass = open ? 'open' : 'closed';

    return (
      <div className={'cart ' + openClass}>
        <div className={'header'}>
          <div className={'title'}>CART</div>
          <div className={'close-cart'}>
            <button className={'close-cart-button'} onClick={() => onClose()}>
              Close X
            </button>
          </div>
        </div>
        <div>Cart items will appear here</div>
        <div className={'footer'}>
          <div> Price</div>
          <div>
            <button className={'order-button'}>Order</button>
          </div>
        </div>
      </div>
    );
  }
}
