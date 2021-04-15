import React from 'react';

import { AppState, OrderPage, Page } from '../AppState';
import { ItemType, BurgerItem } from '../MenuItems';
import { OrderState } from '../OrderState';

import './order-placed.scss';

export interface OrPlProps {
  appState: AppState;
  orderState: OrderState;
}

export class OrderPlaced extends React.PureComponent<OrPlProps> {
  render() {
    const { appState, orderState } = this.props;

    return (
      <div className={'order-placed'}>
        <div className={'op-breadcrumbs'}>
          <button className={'op-breadcrumbs-btn'} onClick={() => appState.exitCompletedOrder()}>
            Home
          </button>
          <p>{'>'}</p>
          <button className={'op-breadcrumbs-btn' + ' selected'}>Order Placed</button>
        </div>
        <div className={'order-details'}>
          <div className={'op-blurb'}>Thank you,</div>
          <div className={'op-blurb'}>your order has been placed!</div>
          <div className={'op-eta'}>ETA {this.estimateETA()}</div>
          <div className={'order-summary'}>
            <div className={'os-container'}>
              <div className={'os-title'}>Order summary:</div>
              <div className={'os-item-container'}>{this.renderOrderSummary()}</div>
              <div className={'os-total'}>Total £ {appState.cartState.totalPrice}</div>
            </div>
            <div className={'dd-container'}>
              <div className={'dd-title'}>Will be delivered to:</div>
              <div className={'dd-info'}>{orderState.cName}</div>
              <div className={'dd-info'}>{orderState.cStAddress}</div>
              <div className={'dd-info'}>{orderState.cCity}</div>
              <div className={'dd-info'}>{orderState.cPostcode}</div>
              <div className={'dd-info'}>{orderState.cEmail}</div>
              <div className={'dd-info'}>{orderState.cPhoneNum}</div>
            </div>
          </div>
          <button className={'order-pg-button'} onClick={() => appState.exitCompletedOrder()}>
            Return to Build-A-BRGR
          </button>
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

  private estimateETA() {
    const hours = new Date().getHours() + 1;
    const mins = new Date().getMinutes();
    return `${hours}:${mins}`;
  }
}
