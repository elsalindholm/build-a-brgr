import React from 'react';
import { AppState, OrderPage } from '../AppState';

import './payment-window.scss';

export interface PWProps {
  appState: AppState;
}

export class PaymentWindow extends React.PureComponent<PWProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'payment-window'}>
        <div className={'op-breadcrumbs'}>
          <button>Home</button>
          <p>{'>'}</p>
          <button>Cart Summary</button>
          <p>{'>'}</p>
          <button>Delivery Details</button>
          <p>{'>'}</p>
          <button>Payment</button>
        </div>
        <div className={'payment-window-blurb'}>
          <div>You cannot actually pay on this website.</div>
          <div>Please click Place the Order to proceed.</div>
          <button onClick={() => appState.setCurrentOrderPage(OrderPage.ORDERPLACED)}>
            Place the Order
          </button>
        </div>
      </div>
    );
  }
}
