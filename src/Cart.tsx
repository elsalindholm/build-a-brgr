import React from 'react';

import { CartState } from './CartState';

import './cart.scss';

import { CartItem } from './CartItem';
import { observer } from 'mobx-react';
import { BurgerItem, ItemType } from './MenuItems';

interface CartProps {
  open: boolean;
  onClose: () => void;
  cartState: CartState;
}

@observer
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
        <div className={'display'}>{this.renderCartItems()}</div>
        <div className={'footer'}>
          <div>TOTAL £ {this.props.cartState.totalPrice}</div>
          <div>
            <button className={'order-button'}>ORDER</button>
          </div>
        </div>
      </div>
    );
  }

  private renderCartItems() {
    const items: JSX.Element[] = [];

    this.props.cartState.cartItems.forEach((item, idx) => {
      items.push(<CartItem cartItem={item} position={idx} cartState={this.props.cartState} />);
      if (item.type === ItemType.BURGER) {
        const burger = item as BurgerItem;
        burger.contents.forEach((ing) => {
          items.push(<div className={'burger-ing'}>{ing.name}</div>);
        });
      }
    });
    return items;
  }
}
