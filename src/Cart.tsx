import React from 'react';
import { observer } from 'mobx-react';

import { CartState } from './CartState';
import { CartItem } from './CartItem';
import { BurgerItem, ItemType } from './MenuItems';
import { AppState } from './AppState';

import './cart.scss';

interface CartProps {
  open: boolean;
  onClose: () => void;
  cartState: CartState;
  appState: AppState;
}

@observer
export class Cart extends React.PureComponent<CartProps> {
  public render() {
    const { open, onClose, appState, cartState } = this.props;
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
            <button
              className={'order-button'}
              disabled={cartState.orderButtonDisabled}
              onClick={() => appState.enterOrderFlow()}
            >
              ORDER
            </button>
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
