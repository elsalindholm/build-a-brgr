import { observer } from 'mobx-react';
import React from 'react';
import { AppState, OrderPage } from '../AppState';
import { CartSummary } from './CartSummary';
import { DeliveryDetails } from './DeliveryDetails';
import { OPHeader } from './OPHeader';

import './order-page.scss';
import { OrderPlaced } from './OrderPlaced';
import { PaymentWindow } from './Payment';

interface OPProps {
  appState: AppState;
}

@observer
export class OrderPageComp extends React.PureComponent<OPProps> {
  public render() {
    const { appState } = this.props;

    let orderPage: JSX.Element;
    switch (appState.currentOrderPage) {
      case OrderPage.CARTSUMMARY:
        orderPage = <CartSummary appState={appState} />;
        break;
      case OrderPage.DELIVERYDETAILS:
        orderPage = <DeliveryDetails appState={appState} />;
        break;
      case OrderPage.PAYMENT:
        orderPage = <PaymentWindow appState={appState} />;
        break;
      case OrderPage.ORDERPLACED:
        orderPage = <OrderPlaced appState={appState} />;
        break;
      default:
        orderPage = <CartSummary appState={appState} />;
        break;
    }

    return (
      <div className={'order-page'}>
        <OPHeader />
        <div className={'order-page-holder'}>{orderPage}</div>
      </div>
    );
  }
}
