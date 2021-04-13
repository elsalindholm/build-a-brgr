import React from 'react';
import { AppState, OrderPage, Page } from '../AppState';
import { OrderState } from '../OrderState';

import './payment-window.scss';

export interface PWProps {
  appState: AppState;
  orderState: OrderState;
}

export class PaymentWindow extends React.PureComponent<PWProps> {
  render() {
    const { appState, orderState } = this.props;

    return (
      <div className={'payment-window'}>
        <div className={'op-breadcrumbs'}>
          <button onClick={() => appState.setCurrentPage(Page.HOME)}>Home</button>
          <p>{'>'}</p>
          <button onClick={() => appState.setCurrentOrderPage(OrderPage.CARTSUMMARY)}>
            Cart Summary
          </button>
          <p>{'>'}</p>
          <button onClick={() => appState.setCurrentOrderPage(OrderPage.DELIVERYDETAILS)}>
            Delivery Details
          </button>
          <p>{'>'}</p>
          <button>Payment</button>
        </div>
        <div className={'payment-window-blurb'}>
          <div>You cannot actually pay on this website.</div>
          <div>Please click Place the Order to proceed.</div>
          <button
            className={'order-pg-button'}
            onClick={() => appState.setCurrentOrderPage(OrderPage.ORDERPLACED)}
          >
            Place the Order
          </button>
        </div>
      </div>
    );
  }
}
