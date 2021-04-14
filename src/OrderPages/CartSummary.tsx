import { observer } from 'mobx-react';
import React from 'react';
import { AppState, OrderPage, Page } from '../AppState';
import { CartItem } from '../CartItem';
import { BurgerItem, ItemType } from '../MenuItems';

import './cart-summary.scss';

interface CSProps {
  appState: AppState;
}

@observer
export class CartSummary extends React.PureComponent<CSProps> {
  render() {
    const { appState } = this.props;

    return (
      <div>
        <div className={'op-breadcrumbs'}>
          <button className={'op-breadcrumbs-btn'} onClick={() => appState.exitOrderFlow()}>
            Home
          </button>
          <p>{'>'}</p>
          <button className={'op-breadcrumbs-btn'}>Cart Summary</button>
        </div>
        <div className={'cart-summary-container'}>
          <div className={'cart-summary'}>{this.renderCartSummary()}</div>
          <div className={'cart-summary-payment'}>
            <div className={'cs-price'}>Total £ {appState.cartState.totalPrice}</div>
            <div className={'cs-VAT'}>Including VAT (20%) £ {appState.cartState.vatAmount}</div>
            <button
              className={'order-pg-button'}
              disabled={appState.cartState.orderButtonDisabled}
              onClick={() => appState.setCurrentOrderPage(OrderPage.DELIVERYDETAILS)}
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  private renderCartSummary() {
    const { appState } = this.props;

    const items: JSX.Element[] = [];

    appState.cartState.cartItems.forEach((item, idx) => {
      items.push(
        <CartItem cartItem={item} position={idx} cartState={this.props.appState.cartState} />
      );
      if (item.type === ItemType.BURGER) {
        const burger = item as BurgerItem;
        burger.contents.forEach((ing) => {
          items.push(<div className={'op-burger-ing'}>{ing.name}</div>);
        });
      }
    });
    return items;
  }
}
