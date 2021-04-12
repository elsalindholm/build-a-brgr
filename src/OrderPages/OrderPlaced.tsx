import React from 'react';
import { AppState, OrderPage, Page } from '../AppState';
import { ItemType, BurgerItem } from '../MenuItems';

import './order-placed.scss';

export interface OrPlProps {
  appState: AppState;
}

export class OrderPlaced extends React.PureComponent<OrPlProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'order-placed'}>
        <div className={'op-breadcrumbs'}>
          <button onClick={() => appState.setCurrentPage(Page.HOME)}>Home</button>
          <p>{'>'}</p>
          <button onClick={() => appState.setCurrentOrderPage(OrderPage.CARTSUMMARY)}>
            Cart Summary
          </button>
          <p>{'>'}</p>
          <button>Delivery Details</button>
          <p>{'>'}</p>
          <button>Payment</button>
          <p>{'>'}</p>
          <button>Order Placed</button>
        </div>
        <div className={'order-details'}>
          <div className={'op-blurb'}>Thank you!</div>
          <div className={'op-blurb'}>Your order has been placed!</div>
          <div className={'op-eta'}>ETA</div>
          <div className={'order-summary'}>
            <div>
              <div className={'os-title'}>Order summary:</div>

              <div className={'os-item-container'}>{this.renderOrderSummary()}</div>
              <div className={'os-total'}>Total £ {appState.cartState.totalPrice}</div>
            </div>
            <div>Will be delivered to:</div>
          </div>
        </div>
      </div>
    );
  }

  private renderOrderSummary() {
    const { appState } = this.props;

    const items: JSX.Element[] = [];

    appState.cartState.cartItems.forEach((item) => {
      items.push(
        <div className={'os-item'}>
          <div className={'os-item-name'}>{item.name}</div>
          <div className={'os-item-price'}> £ {item.price}</div>
        </div>
      );
      if (item.type === ItemType.BURGER) {
        const burger = item as BurgerItem;
        burger.contents.forEach((ing) => {
          items.push(<div className={'os-item-ing'}>{ing.name}</div>);
        });
      }
    });
    return items;
  }
}
