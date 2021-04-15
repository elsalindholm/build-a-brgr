import React from 'react';
import { observer } from 'mobx-react';

import { CartState } from './CartState';
import { CartItem } from './CartItem';
import { BurgerItem, ItemType } from './MenuItems';

import './cart.scss';
import { CartStage } from './AppState';

interface CartProps {
  stage: CartStage;
  onClose: () => void;
  cartState: CartState;
  onOrder: () => void;
  onClosed: () => void;
}

@observer
export class Cart extends React.PureComponent<CartProps> {
  public render() {
    const { stage, onClose, cartState, onOrder, onClosed } = this.props;

    return (
      <div className={'cart ' + stage} onAnimationEnd={() => onClosed()}>
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
              onClick={() => onOrder()}
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
